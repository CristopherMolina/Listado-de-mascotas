using AutoMapper;
using Backend_CRUDMascotas.Models.DTO;

namespace Backend_CRUDMascotas.Models.Profiles
{
    public class MascotaProfile: Profile
    {
        public MascotaProfile()
        {
            CreateMap<Mascota, MascotaDTO>();
            CreateMap<MascotaDTO, Mascota>();
        }
    }
}
