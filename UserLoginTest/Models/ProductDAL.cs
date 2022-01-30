using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserLoginTest.Models
{
    public class ProductDAL
    {
        //read
        public List<Product> GetProducts()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = $"select * from products";
                connect.Open();
                List<Product> p = connect.Query<Product>(sql).ToList();
                connect.Close();
                return p;
            }
        }
    }
}
