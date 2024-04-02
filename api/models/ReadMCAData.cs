using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.models
{
    public class ReadMCAData
    {
         private readonly string cs;
        public ReadMovieData(){
            string server = "lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "psmjh2r64v4natx5";
            string port = "3306";
            string userName = "hh1bgwqx63jkulej";
            string password = "airstr2e2fmxbedj";
            cs = $@"server={server};user={userName};database={database};port={port};password={password};";
        }
    }
}