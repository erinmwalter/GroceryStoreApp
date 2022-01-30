using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UserLoginTest.Models
{
    public class Product
    {
        [Key]
        public int ProdId { get; set; }
        public string ProdName { get; set; }
        public double ProdPrice { get; set; }
        public string ProdImg { get; set; }

    }
}
