Download POSTGRESQL

https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

Create library DATABASE

Create books TABLE

SQL - create table

- create table books (id varchar(50), tile varchar(50), author varchar(50), publication_date DATE, language varchar(50), pages int, publisher );


.env 


    PORT = 4000
    USER = 'postgres'
    HOST = 'localhost'
    DATABASE = 'library'
    PASSWORD = ''
   
   ## To run  the server:
   
        npm install
        npm start



# api end points


DOCUMENTATION
    
     http://localhost:4000/api-docs

- GET
  
       http://localhost:4000/api/books
       http://localhost:4000/api/books/[id]

- POST

       http://localhost:4000/api/addbook    

- PUT

       http://localhost:4000/api/updatebook/[id]

- DELETE
  
       http://localhost:4000/api/deletebook/[id]
    


