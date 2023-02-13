using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Entity
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var context = new SampleEntities())
            {
                //Simple Query
                var query = from e in context.Employees
                            where e.EmployeeID == 1
                            select e;

                //Query with Join
                var query2 = from e in context.Employees
                             join d in context.Departments
                             on e.DepartmentID equals d.DepartmentID
                             where e.EmployeeID == 1
                             select new
                             {
                                 Employee = e,
                                 Department = d
                             };

                //Query with Group By
                var query3 = from e in context.Employees
                             group e by e.DepartmentID into g
                             select g;

                //Query with Aggregate
                var query4 = from e in context.Employees
                             group e by e.DepartmentID into g
                             select new
                             {
                                 DepartmentID = g.Key,
                                 Count = g.Count()
                             };

                //Query with Aggregate and Order By
                var query5 = from e in context.Employees
                             group e by e.DepartmentID into g
                             select new
                             {
                                 DepartmentID = g.Key,
                                 Count = g.Count()
                             }
                             into g2
                             orderby g2.Count descending
                             select g2;

                //Query with Aggregate and Order By and Take
                var query6 = (from e in context.Employees
                              group e by e.DepartmentID into g
                              select new
                              {
                                  DepartmentID = g.Key,
                                  Count = g.Count()
                              }
                              into g2
                              orderby g2.Count descending
                              select g2).Take(3);

                //Query with Aggregate and Order By and Take and Where
                var query7 = (from e in context.Employees
                              group e by e.DepartmentID into g
                              select new
                              {
                                  DepartmentID = g.Key,
                                  Count = g.Count()
                              }
                              into g2
                              orderby g2.Count descending
                              where g2.Count > 1
                              select g2).Take(3);
            }
        }
    }
}

