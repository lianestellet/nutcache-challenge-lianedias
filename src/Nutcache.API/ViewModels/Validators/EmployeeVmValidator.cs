using FluentValidation;

namespace Nutcache.API.ViewModels.Validators
{
    public class EmployeeVmValidator : AbstractValidator<EmployeeVm>
    {
        public EmployeeVmValidator()
        {
            RuleFor(emp => emp.Name)
                .NotNull()
                .NotEmpty()
                .WithMessage("Name cannot be empty");

            RuleFor(emp => emp.Email)
                .EmailAddress()
                .WithMessage("Not a valid e-mail");



        }
    }
}
