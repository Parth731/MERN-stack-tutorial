1.  **What is SQL?**

    - SQL is structure Query Langauage, open-source relational database management system(RDMS).
    - PostgreSQL is widely used in web development, data analytics, and other applications that require robust and complex database management. It is preferred for its reliability, performance, and strong community support.

2.  **Key Features of PostgreSQL**

    - ACID Compliance: Atomicity, Consistency, Isolation, and Durability (ACID).
    - Extensibility
    - Concurrency
    - Data Integrity
    - Support for Complex Queries
    - Scalability
    - Replication

3.  **challenges of Postgres**

    - writing efficient queries to retrieve information
    - designing the schema or structure, of the database
    - understanding when to use advance features
    - managing the database in a production enviroment

4.  **what is database and table and row and column**

    - A database is a collection of organized data that can be stored and accessed electronically
    - A table is collection of records.
    - A row (or record) each row represent one city.
    - A column (or field) each column records one property about a things

5.  **How to Create Table in SQL**

    ```sql
    CREATE TABLE cities (
    name VARCHAR(50),
    country VARCHAR(50),
    population INTEGER,
    area INTEGER
    );
    ```

6.  **How Insert Data in Table**

    ```sql
    INSERT INTO cities (name, country, population, area)
    VALUES ('Tokyo', 'Japan', 38505000, 8223);

    INSERT INTO cities (name, country, population, area)
    VALUES
        ('Delhi', 'India', 28125000, 2240),
    ('Shanghai', 'China', 22125000, 4015),
    ('Sao Paulo', 'Brazil', 20935000, 3043);
    ```

7.  **Retrieving Data with Select**

    ```sql
    SELECT name, population FROM cities;
    ```

8.  **Create, Insert, and Select!**

    - Let's practice creating a table and inserting data into it. The SQL you see below creates a new table called movies and inserts two rows into it.

    - GOAL: Write a SELECT statement to retrieve both rows inserted into the movies table. Select both the title column and the box_office column.

    ```sql
    create table movies (
        title varchar(50),
        box_office integer
    );

    insert into movies (title, box_office)

    value ("The Avengers", 1500000000),('Batman v Superman', 873000000);

    select title,box_office from movies
    ```

9.  **Calculated Columns**

    ```sql
    SELECT name, population / area as population_density
    FROM cities
    ```

10. **Math Operators**

    - '+': Add
    - '-': Subtract
    - '\*': Multiply
    - '/': divide
    - '^': Exponent
    - '|/': Sequare Root
    - '@': Absolute Value
    - '%': Remainder

11. **String Operator and Function**

    - '||': join two string
    - concat(): join two string
    - lower(): give a lower case string
    - length(): gives number of characters in a string
    - upper(): gives an upper case string

12. **Example of String operator**

    ```sql
    SELECT name || ', ' || country as location FROM cities;
    SELECT concat(name,', ',country) as location FROM cities;
    SELECT concat(UPPER(name),', ',LOWER(country)) as location FROM cities;
    SELECT name || country FROM cities;
    ```

13. **Filtering Rows with "Where"**

    ```sql
    SELECT name, area FROM cities
    WHERE area > 4000;
    ```

14. **Comparison Math Operators**

    - '=': are the value equal?
    - '>': greater
    - '<': less
    - '>=': greater or equal
    - '<=': less or equal
    - 'IN': present in list
    - '<>': value not equal
    - '!=': value not equal
    - 'between': value between two other values
    - 'not in': value not present in a list?

    ```sql
    SELECT name, area FROM cities
    WHERE area <> 8223;

    SELECT name, area FROM cities
    WHERE area != 8223;

    SELECT name, area FROM cities
    WHERE area = 8223

    SELECT name, area FROM cities
    WHERE area BETWEEN 2000 AND 4000;

    SELECT name, area FROM cities
    WHERE name IN ('Delhi', 'Shanghai')

    SELECT name, area FROM cities
    WHERE area NOT IN (3043, 8223)

    SELECT name, area FROM cities
    WHERE area NOT IN (3043, 8223) OR name = 'Delhi'

    SELECT name, area FROM cities
    WHERE area NOT IN (3043, 8223) AND name = 'Delhi'

    SELECT name, area FROM cities
    WHERE area NOT IN (3043, 8223) OR name = 'Delhi' OR name = 'Tokyo'
    ```

15. **A More Challenging 'Where'**

    - We are once again working with the phones table. Write a query that will select the name and manufacturer for all phones created by Apple or Samsung.

    ```sql
    select name, manufacturer from phones
    where manufacturer = "Apple" or manufacturer = "Samsung"
    ```

16. **Trying Calculations in Where Clauses**

    - We are once again working with the phones table. Write a query that will print the name and total_revenue of all phones with a total_revenue greater than 1,000,000

    ```sql
    select name, price * units_sold as total_revenue
    from phones
    where price * units_sold > 1000000
    ```

17. **Updating Rows**

    ```sql
    UPDATE cities
    SET population = 39505000
    WHERE name = 'Tokyo'
    ```

18. **Deleting Rows**

    ```sql
    DELETE FROM cities WHERE name = 'Tokyo'

    SELECT * FROM cities

    INSERT INTO cities (name, country, population, area)
    VALUES ('Tokyo', 'Japan', 38505000, 8223)
    ```

19. **Try Updating Records In a Table!**

    - We are once again working with the phones table.
      - You are going to write two separate queries
      - The first query should update the units_sold of the phone with name N8 to 8543
      - he second query should select all rows and columns of the phones table

    ```sql
    -- Write query here to update the 'units_sold' of the phone with name 'N8' to 8543
    update phones set units_sold = 8543 where name = 'N8';


    -- Write query here to select all rows and columns of the 'phones' table
    select * from phones;
    ```

20. **Practice Deleting Records**

    - We are once again working with the phones table
      - You are going to write two separate queries
      - The first query should delete all phones that were created by Samsung
      - The second query should select all rows and columns of the phones table

    ```sql
    -- Write your delete SQL here
    delete from phones where manufacturer = 'Samsung';

    -- Write query here to select all rows and columns from phones
    select * from phones;
    ```
