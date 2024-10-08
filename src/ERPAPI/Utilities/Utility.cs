using System.Security.Cryptography;
using System.Text;

namespace ERPAPI.Utilities
{
    public class Utility
    {

        public static string Encrypt(string clearText)
        {
            string EncryptionKey = "MAKV2SPBNI99212";
            byte[] clearBytes = Encoding.Unicode.GetBytes(clearText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(clearBytes, 0, clearBytes.Length);
                        cs.Close();
                    }
                    clearText = Convert.ToBase64String(ms.ToArray());
                }
            }
            return clearText;
        }


        public static string Decrypt(string cipherText)
        {
            string EncryptionKey = "MAKV2SPBNI99212";
            byte[] cipherBytes = Convert.FromBase64String(cipherText);
            using (Aes encryptor = Aes.Create())
            {
                Rfc2898DeriveBytes pdb = new Rfc2898DeriveBytes(EncryptionKey, new byte[] { 0x49, 0x76, 0x61, 0x6e, 0x20, 0x4d, 0x65, 0x64, 0x76, 0x65, 0x64, 0x65, 0x76 });
                encryptor.Key = pdb.GetBytes(32);
                encryptor.IV = pdb.GetBytes(16);
                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(cipherBytes, 0, cipherBytes.Length);
                        cs.Close();
                    }
                    cipherText = Encoding.Unicode.GetString(ms.ToArray());
                }
            }
            return cipherText;
        }

        public static string GetImage(string URL)
        {
            string base64Img = string.Empty;
            if (System.IO.File.Exists(URL))
            {
                FileStream fs = new FileStream(URL, FileMode.Open, FileAccess.Read);

                BinaryReader br = new BinaryReader(fs);

                Byte[] bytes = br.ReadBytes((Int32)fs.Length);

                br.Close();
                string extension = Path.GetExtension(URL);

                var base64 = Convert.ToBase64String(bytes);
                base64Img = String.Format("data:image/{0};base64,{1}", extension, base64);
            }
            return base64Img;
        }
        //public static string SaveImage(Stream stream, string fileName, string driverPath, long OrgId)
        //{
        //    WebImage imgFile = new WebImage(stream);
        //    string file = fileName.Substring(0, (fileName.LastIndexOf(".")));
        //    string extension = imgFile.ImageFormat;
        //    file = file + OrgId.ToString().PadLeft(4, '0') + DateTime.Now.ToString("yymmssff");//+ extension;
        //    imgFile.Save(Path.Combine(string.Format(@"{0}", driverPath), file));
        //    return driverPath + file + "." + extension;
        //}
        //public static string SaveImage(Stream stream, string fileName, string driverPath, long OrgId, int width, int height)
        //{
        //    WebImage imgFile = new WebImage(stream);
        //    imgFile.Resize(width, height, false, true);
        //    string file = fileName.Substring(0, (fileName.LastIndexOf(".")));
        //    string extension = imgFile.ImageFormat;
        //    file = file + OrgId.ToString().PadLeft(4, '0') + DateTime.Now.ToString("yymmssff");//+ extension;
        //    imgFile.Save(Path.Combine(string.Format(@"{0}", driverPath), file));
        //    return driverPath + file + "." + extension;
        //}
        public static void DeleteImage(string ImagePath)
        {
            if (!string.IsNullOrEmpty(ImagePath))
            {
                if (File.Exists(ImagePath))
                {
                    File.Delete(ImagePath);
                }
            }
        }
        public static byte[] GetImageBytes(string imagePath)
        {
            byte[] imgByte = null;
            if (System.IO.File.Exists(imagePath))
            {
                FileStream fs = new FileStream(imagePath, FileMode.Open, FileAccess.Read);

                BinaryReader br = new BinaryReader(fs);

                Byte[] bytes = br.ReadBytes((Int32)fs.Length);

                br.Close();
                imgByte = bytes;
            }
            return imgByte;
        }
        //public static string ParamChecker(string param)
        //{
        //    if (param.ToLower().Contains(";") || param.ToLower().Contains("delete") || param.ToLower().Contains("database") || param.ToLower().Contains("alter") || param.ToLower().Contains("truncate") || param.ToLower().Contains("column") || param.ToLower().Contains("drop"))
        //    {
        //        return param = "";
        //    }
        //    return param;
        //}

        public static string ParamChecker(string param)
        {
            string[] blacklist = { ";", "delete", "database", "alter", "truncate", "column", "drop", "'", "-1" };

            foreach (string word in blacklist)
            {
                if (param.ToLower().Contains(word) || param.Contains("--"))
                {
                    return "";
                }
            }

            return param;
        }


        //public static byte[] GenerateQRCode(string codeText)
        //{
        //    QRCodeGenerator qRCodeGenerator = new QRCodeGenerator();
        //    QRCodeData data = qRCodeGenerator.CreateQrCode(codeText, QRCodeGenerator.ECCLevel.Q);
        //    QRCode qrCode = new QRCode(data);
        //    MemoryStream stream = new MemoryStream();
        //    qrCode.GetGraphic(5).Save(stream, ImageFormat.Png);
        //    return stream.ToArray();
        //}

    }
}
