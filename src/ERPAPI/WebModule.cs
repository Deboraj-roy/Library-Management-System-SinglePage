using Autofac;
using ERPAPI.Model;

namespace ERPAPI
{
    public class WebModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<BankSetupModel>().AsSelf();
        }
    }
}
