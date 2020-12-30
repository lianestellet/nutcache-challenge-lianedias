// src/server.js
import { createServer, Model, RestSerializer } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    serializers: {
      employee: RestSerializer.extend({
      })
    },

    models: {
      employee: Model,
    },

    seeds(server) {
      server.create("employee", {
      		birthDate:"2020-12-07T03:00:00Z",
            cpf:"08436413471",
            email:"something@gmail.com",
            gender:"NonBinary",
            id:1,
            name:"John Cena",
            startDate:"2021-02-01T03:00:00Z",
            team:"Frontend"});
    },

    routes() {
      this.urlPrefix = 'https://localhost:5001'
      this.namespace = "api"

      this.get("/employees", (schema) => {
        const employees = schema.employees.all();
        return employees.models;
      })
      
      this.post("/employees", (schema, request) => {
          const attrs = JSON.parse(request.requestBody)
          const employee = schema.employees.create(attrs);
          return employee.attrs
      })

      this.put("/employees/:id", (schema, request) => {
        let id = request.params.id
        let attrs = JSON.parse(request.requestBody)
        let employee = schema.employees.find(id).update(attrs);

        return employee.attrs
      })

      this.delete("/employees/:id", (schema, request) => {
        let id = request.params.id
        return schema.employees.find(id).destroy()
      })
    },
  })

  return server
}