using Autofac;
using ERPAPI.DTOclass;

namespace ERPAPI.Model
{
    public class BankSetupModel
    {
        private ILifetimeScope _scope;
        public BankSetupDTO BankSetupDTO { get; set; }
        public BankSetupModel()
        {
            
        }

        internal void Resolve(ILifetimeScope scope)
        {
            _scope = scope;
        }
    }
}
