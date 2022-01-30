using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserLoginTest.Models
{
    public class UserDAL
    {
        public static int CurrentUserId = 1;

        //CREATE
        public void CreateUser(User u)
        {
            string sql = $"insert into users values(0, '{u.UserName}', '{u.Password}', '{u.FirstName}', '{u.LastName}', '{u.Email}', '{u.Phone}')";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<User>(sql);
                connect.Close();
            }
        }
        
        //READ
        //returns true if login successful
        public bool Login(User u)
        {
            string sql = $"select * from users where username='{u.UserName}' AND `password`='{u.Password}'";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                User user = connect.Query<User>(sql).FirstOrDefault();
                connect.Close();
                if (user != null)
                {
                    CurrentUserId = user.UserId;
                    return true;
                }
                return false;
            }
        }

        //returns user by userId
        public User GetCurrentUser()
        {
            if (CurrentUserId != -1)
            {
                using (var connect = new MySqlConnection(Secret.Connection))
                {
                    string sql = $"select * from users where userId ={CurrentUserId}";
                    connect.Open();
                    User u = connect.Query<User>(sql).FirstOrDefault();
                    if (u != null) {
                        string favoritesSql = $"select * from products inner join usersproducts on products.prodId=usersproducts.prodId where userId={u.UserId}";
                        u.Favorites = connect.Query<Product>(favoritesSql).ToList();
                    }
                    connect.Close();
                    return u;
                }
            }
                return null;
        }

        //UPDATE
        public void UpdateUser(int id, User u)
        {
            string sql = $"update users set userName='{u.UserName}', `password`='{u.Password}', firstName='{u.FirstName}', lastName='{u.LastName}', " +
                $"email='{u.Email}', phone='{u.Phone}' where userId={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<User>(sql);
                connect.Close();
            }
        }

        public int LogOut()
        {
            CurrentUserId = -1;
            return CurrentUserId;
        }

        //DELETE
        public void DeleteUser(int id) 
        {
            string sql = $"delete * from users where userId={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<User>(sql);
                connect.Close();
            }
        }
    }
}
