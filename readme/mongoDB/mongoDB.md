1.  **What is mongoDB?**

    - MongoDB is NoSQL, open-source document-oriented database that stores data in flexible, JSON-like documents. It allows for dynamic schema design, making it ideal for handling large volumes of unstructured or semi-structured data.

2.  **JSON vs BSON**

    - JSON is javascript Object Nation, BSON is Binary Javascript object nation.
    - JSON is a text-based format, while BSON is a binary format.
    - JSON is fast to read and built to slow, BSON is slow to read and fast to build
    - JSON is human's readable and doesn't need to Parse, BSON need to parse
    - JSON is commanly used to data exchanges on the web, BSON used to store the data in database

3.  **Features of MongoDB**

    - Multiple Servers: It can run over multiple servers
    - Schema-less Database: It is a schema-less database.
    - Indexing: Any field in the document can be indexed.
    - Rich Object Model: It supports a rich object model.
    - High scalability
    - Distributed database

4.  **RDMS vs MongoDB**

    - It is a relational database Management System.
    - mongoDB is non relational and document oriented databases

    - Not suitable for hierarchical data storage
    - Suitable for hierarchical data storage.

    - It is vertically scalable i.e increasing RAM.
    - It is horizontally scalable i.e we can add more servers.

    - It has a predefined schema.
    - It has a dynamic schema.

    - It is row-based.
    - It is document-based.

    - It is slower in comparison with MongoDB.
    - It is almost 100 times faster than RDBMS.

    - Supports complex joins.
    - No support for complex joins.

    - It is column-based.
    - It is field-based.

    - It supports SQL query language only.
    - It supports JSON query language

5.  **MongoDB vs MySQL**

    - MongoDB: NoSQL, document-based, stores data in flexible, schema-less JSON-like documents.
    - MySQL: Relational, stores data in structured tables with fixed schemas.

    - MongoDB: Dynamic and schema-less, documents can have varying structures.
    - MySQL: Predefined schema, tables require a fixed structure (columns and data types).

    - MongoDB: Horizontally scalable (sharding across servers).
    - MySQL: Primarily vertically scalable (scaling by upgrading hardware).

    - MongoDB: Uses its own query language (BSON/JSON format).
    - MySQL: Uses SQL (Structured Query Language) for queries.

    - MongoDB: No joins, uses embedding or referencing for relationships.
    - MySQL: Supports joins to combine data from multiple tables.

    - MongoDB: Fast for large-scale, unstructured data and real-time applications.
    - MySQL: Optimized for structured data and complex queries.

6.  **Differences in Terminology**

    - table
    - collection

    - Row
    - Documents

    - Column
    - Field

    - Joins
    - Embedded Documents, reference

## mongoDB indexing

7.  **What is Indexing in MongoDB**(IMP)

    - MongoDB uses indexing to make the query processing more efficient.
    - If there is no indexing, then MongoDB must scan every document in the collection and retrieve only those documents that match the query.
    - The indexes are ordered by the value of the field specified in the index.

8.  **How many indexes are in MongoDB?**

    - By default, MongoDB supports up to 64 indexes per collection. This includes the default index on the \_id field that MongoDB creates automatically for every collection.

9.  **Can MongoDB use multiple indexes?**

    - Yes, MongoDB can use multiple indexes to optimize query performance.

10. **Creating an Index**

    ```javascript
    db.collection.createIndex({ field1: 1, field2: -1, ... })
    ```

    - Field1, Field2: The fields on which the index is created.
    - 1: Ascending order.
    - -1: Descending order.

    - To create an ascending index on the username field of a users collection:

    ```javascript
    db.users.createIndex({ username: 1 });
    ```

    - The createIndex() method also has a number of optional parameters.

    background (Boolean)
    unique (Boolean)
    name (string)
    sparse (Boolean)
    expireAfterSeconds (integer)
    hidden (Boolean)
    storageEngine (Document)

11. **Creating Compound Indexes**

    - You can create indexes on multiple fields is called as compound indexes.

    ```javascript
    db.users.createIndex({ lastName: 1, firstName: -1 });
    ```

12. **Unique Indexes**

    - To ensure that all values in a specific field are unique, you can create a unique index.

    - To create a unique index on the email field

    ```javascript
    db.users.createIndex({ email: 1 }, { unique: true });
    ```

13. **Text Indexes**

    - Text indexes are used for searching text within string content. You can create a text index on a field that contains string data.

    - To create a text index on the description field:

    ```javascript
    db.products.createIndex({ description: "text" });
    ```

14. **Partial Indexes**

    - A partial index only includes documents that meet a specified filter expression. This can save space and improve performance.

    - To create a partial index that only includes documents where status is "active":

    ```javascript
    db.orders.createIndex(
      { orderDate: 1 },
      { partialFilterExpression: { status: "active" } }
    );
    ```

15. **Geospatial Indexes**

    - MongoDB supports geospatial indexes to efficiently query spatial data.

    - To create a 2D geospatial index on the location field:

    ```javascript
    db.places.createIndex({ location: "2dsphere" });
    ```

16. **Checking Existing Indexes**

    - MongoDB gives a description of all the indexes:

    ```javascript
    db.collection.getIndexes();
    db.NAME_OF_COLLECTION.getIndexes();
    ```

17. **Dropping an Index**

    - The dropIndex() methods can only delete one index at a time

    - To drop an index by name

    ```javascript
    db.users.dropIndex("username_1");
    db.NAME_OF_COLLECTION.dropIndex({ KEY: 1 });
    ```

    - delete (or drop) multiple indexes from the collection, MongoDB provides the dropIndexes() method that takes multiple indexes as its parameters.

    ```javascript
    db.NAME_OF_COLLECTION.dropIndexes({ KEY1: 1, KEY2: 1 });
    ```

18. **Creating Indexes Using MongoDB Compass**

    - Select your database and collection.
    - Go to the "Indexes" tab.
    - Click on "Create Index".
    - Specify the fields and options for the index.
    - Click "Create Index" to finalize.

19. **Considerations**

    - Performance: Indexes can speed up read operations but may slow down write operations due to the overhead of maintaining the index.
    - Storage: Indexes consume additional disk space.
    - Analyze Queries: Use the explain() method to analyze how queries use indexes and improve their performance.

20. **Create an Index**

    - Along with the default index, we can create indexes on our own using the createIndex() method. This method creates one or more indexes on the specified collections.

    ```javascript
    db.Collection.name.createIndex(
    keys : {Field_name:1/-1},
    options : <document>,
    commitQuorum : <string or integer>
    )
    ```

    - Database: gfg
    - Collection: students
    - Document: Four documents that contains the details of the students

    ```javascript
    db.students.createIndex({ studentsId: 1 });
    ```

    - Single field Index: A single field index means index on a single field of a document.

    ```javascript
    db.students.createIndex({ studentsId: 1 });
    ```

    - Compound Index: We can combine multiple fields for compound indexing

    ```javascript
    db.students.createIndex({ studentAge: 1, studentName: 1 });
    db.students.find().sort({ studentAge: 1, studentName: 1 }).pretty();
    ```

    - Multikey Index:

    ```javascript
    db.students.createIndex({ skillsets: 1 });

    db.students.find({ skillsets: ["Java", "Android"] }).pretty();
    ```

    - Geospatial Indexes:

    ```javascript
    db.industries.createIndex({ location: "2dsphere" });

    db.industries
      .find({
        location: {
          $near: {
            $geometry: { type: "Point", coordinates: [-73.9667, 40.78] },
            $minDistance: 1000,
            $maxDistance: 5000,
          },
        },
      })
      .pretty();
    ```

    - Text Index:

    ```javascript
    db.singers
      .find(
        { $text: { $search: "Annisten" } },
        { score: { $meta: "textScore" } }
      )
      .sort({ score: { $meta: "textScore" } });

    db.accessories.createIndex({ name: "text", description: "text" });

    db.accessories.find({ $text: { $search: "Input" } });
    ```

    - Hash Index:

    **_Syntax_**

    - To create a wild card index on the specified field

    ```javascript
    db.<collection>.createIndex( { “field.$**”:1 } )
    ```

    - To create a wild card index on all the field

    ```javascript
    db.<collection>.createIndex( { “$**”:1 } )
    ```

    - To create a wild card index on multiple specified fields

    ```javascript
    db.<collection>.createIndex(
    { “$**”:1 },
    {“wildcardProjection”:{“field1”: 1, “field2”:2}})
    ```

    - Let us create an index for “authorTags” field

    ```javascript
    db.book.createIndex({ "authorTags.$**": 1 });

    //Since “index” is created on set of fields, we can easily query in the following way
    db.book.find({ "authorTags.inclusions": "RDBMS" });
    db.book.find({ "authorTags.usedin": "Multipurpose" });
    ```

21. **Create a Compound Index**

    ```javascript
    {"id":"1", "product":"chips", "manufacturer":"lays", "price":20}
    {"id":"2", "product":"pringles", "manufacturer":"Kellogg's", "price":99}
    {"id":"3", "product":"Doritos", "manufacturer":"lays", "price":10}
    {"id":"4", "product":"cheetos", "manufacturer":"lays", "price":473}
    {"id":"5", "product":"coldrink", "manufacturer":"mountain-dew", "price":20}

    //Here we are creating an index on manufacture in ascending order and then on price in descending order
    db.products.createIndex({manufacturer:1, price:-1})

    //Here we are creating an index on the product in ascending order then it will be sorted for the manufacturer in ascending order, and then it will again be sorted for price
    db.products.createIndex({product:1,manufacturer:1,price:1})
    ```

    - Sorting using Compound Indexes

    ```javascript
    db.data.createIndex({ a: 1, b: -1, c: 1 });
    ```

    - without index

    ```javascript
    db.data.find({ a: 6 }).sort({ b: -1, c: 1 });

    db.products.find().sort({ manufacturer: 1, price: -1 });
    ```

22. **What is MongoDB Text Indexes**

    - The MongoDB Text Indexes feature allows users to perform full-text searches on text fields in a collection efficiently.

    ```javascript
    db.collectionName.createIndex( { field: “text” } )
    ```

23. **MongoDB Text Indexes Example**

    ```javascript
    Database: gfg
    Collection: studentsposts
    Documents: Two documents
    ```

    ![alt text](image.png)

    ```javascript
    db.studentsposts.createIndex({ title: "text" });
    ```

    ```javascript
    db.studentsposts.find({ $text: { $search: "mongodb" } }).pretty();
    ```

    ![alt text](image-1.png)

24. **Drop Index in MongoDB**

    ```javascript
    db.studentsposts.getIndexes();
    ```

    ```javascript
    db.studentsposts.dropIndex("title_text");
    ```

    ![alt text](image-2.png)

25. **WildcardIndex**

    - Using wildcard specifier($\*\*) you are allowed to create multiple text indexes fields. Due to the wildcard text index MongoDB indexes each and every field that holds string data in all the documents present in the given collection.

    ```javascript
    db.studentsposts.createIndex({ "$**": "text" });
    ```

26. **Limitations of Text Index**

    - At most one text index is allowed per collection
    - With $text query expression, we cannot use hint()
    - Together Text Index and Sort cannot give the required results. The sort operations cannot use the ordering in the text index.
    - Compound Index cannot include multi-key or geospatial index fields.

27. **Use of MongoDB Multikey Indexes**

    - MongoDB multikey indexes are used to collect and sort data from fields containing array values.
    - MongoDB automatically creates a multikey index when a field that contains an array value is indexed.
    - Multikey indexes help make searches on arrays faster.
    - It can be constructed over arrays that hold both scalar values(like strings, numbers, etc) and nested documents

28. **How to Create a Multikey Index?**

    ```javascript
    db.Collection_name.createIndex({ filed_name: 1 / -1 });
    ```

29. **Examples of MongoDB Multikey Indexes**

    ```javascript
    Database: gfg
    Collections: student
    Document: Three documents contains the details of the students
    ```

    ![alt text](image-3.png)

    **Example 1: Index Basic Arrays**

    ```javascript
    db.student.createIndex({ language: 1 });
    ```

    - After indexing, we will check the index using the getIndexes() method:

    ![alt text](image-4.png)

    **Example 2: Index Arrays with Embedded Documents**

    ```javascript
    db.student.createIndex({ "details.age": 1, "details.branch": 1 });
    ```

    - After indexing, we will check the index using the getIndexes() method:

    ![alt text](image-5.png)

30. **Limitations of MongoDB Multikey Indexes**

    - When you are creating a compound multikey index then each indexed document must contain at most one indexed field whose value is an array.
    - You are not allowed to create a compound multikey index if more than one to be indexed field of a document is an array.
    - When the compound multikey index already exists, then you are not allowed to insert a document that will break the restrictions.
    - When a field is an array of documents, you are allowed to index an embedded document to create a compound index but at most one indexed field can be an array.

31. **Key TakeAways About MongoDB Multikey Indexes**

    - Multikey indexes in MongoDB are used to collect and sort data from fields containing array values, improving query performance for array fields.
    - You can’t use a multikey index as the shard key index.
    - In MongoDB, hashed indexes are not multikey index.
    - The multikey index cannot support the $expr operator.
    - In MongoDB, if a filter query specifies the exact match for an array as a whole, then MongoDB scans the multikey index to look for the first element of the quarry array.

## Aggregation

32. **What is Aggregation?**(IMP)

    - Aggregation in MongoDB is a database process that allows users to perform complex data transformations and computations on collections of documents, enabling the generation of summarized results.

33. **What are different aggregation commands?**(IMP)

    - Different aggregation commands in MongoDB include $match, $group, $sort, $project, $limit, $unwind, and $lookup. These commands allow for filtering, grouping, sorting, projecting specific fields, limiting results, unwinding arrays, and joining collections.

34. **What is the difference between aggregation and aggregation pipeline?**(IMP)

    - Aggregation refers to the overall process of performing data transformations and computations, while the aggregation pipeline is a specific framework in MongoDB that consists of multiple stages to facilitate this process. The pipeline allows documents to pass through various stages, transforming them step by step.

35. **Aggregation Pipeline Method**

    - To understand Aggregation Pipeline Method Let’s imagine a collection named users with some documents for our examples.

    ```javascript
    {
    "_id": ObjectId("60a3c7e96e06f64fb5ac0700"),
    "name": "Alice",
    "age": 30,
    "email": "alice@example.com",
    "city": "New York"
    }
    {
    "_id": ObjectId("60a3c7e96e06f64fb5ac0701"),
    "name": "Bob",
    "age": 35,
    "email": "bob@example.com",
    "city": "Los Angeles"
    }
    {
    "_id": ObjectId("60a3c7e96e06f64fb5ac0702"),
    "name": "Charlie",
    "age": 25,
    "email": "charlie@example.com",
    "city": "Chicago"
    }
    ```

    - $group: It Groups documents by the city field and calculates the average age using the $avg accumulator.

    ```javascript
    db.users.aggregate([
      { $group: { _id: "$city", averageAge: { $avg: "$age" } } },
    ]);
    ```

    ```javascript
    [
      { _id: "New York", averageAge: 30 },
      { _id: "Chicago", averageAge: 25 },
      { _id: "Los Angeles", averageAge: 35 },
    ];
    ```

    - $project: Include or exclude fields from the output documents.

    ```javascript
    db.users.aggregate([{ $project: { name: 1, city: 1, _id: 0 } }]);
    ```

    ```javascript
    [
      { name: "Alice", city: "New York" },
      { name: "Bob", city: "Los Angeles" },
      { name: "Charlie", city: "Chicago" },
    ];
    ```

    - $match: Filter documents to pass only those that match the specified condition(s).

    ```javascript
    db.users.aggregate([{ $match: { age: { $gt: 30 } } }]);
    ```

    ```javascript
    [
      {
        _id: ObjectId("60a3c7e96e06f64fb5ac0701"),
        name: "Bob",
        age: 35,
        email: "bob@example.com",
        city: "Los Angeles",
      },
    ];
    ```

    - $sort: It Order the documents.

    ```javascript
    db.users.aggregate([{ $sort: { age: 1 } }]);
    ```

    ```javascript
    [
      {
        _id: ObjectId("60a3c7e96e06f64fb5ac0702"),
        name: "Charlie",
        age: 25,
        email: "charlie@example.com",
        city: "Chicago",
      },
      {
        _id: ObjectId("60a3c7e96e06f64fb5ac0700"),
        name: "Alice",
        age: 30,
        email: "alice@example.com",
        city: "New York",
      },
      {
        _id: ObjectId("60a3c7e96e06f64fb5ac0701"),
        name: "Bob",
        age: 35,
        email: "bob@example.com",
        city: "Los Angeles",
      },
    ];
    ```

    - $limit: Limit the number of documents passed to the next stage.

    ```javascript
    db.users.aggregate([{ $limit: 2 }]);
    ```

    ```javascript
    [
      {
        _id: ObjectId("60a3c7e96e06f64fb5ac0700"),
        name: "Alice",
        age: 30,
        email: "alice@example.com",
        city: "New York",
      },
      {
        _id: ObjectId("60a3c7e96e06f64fb5ac0701"),
        name: "Bob",
        age: 35,
        email: "bob@example.com",
        city: "Los Angeles",
      },
    ];
    ```

36. **How Fast is MongoDB Aggregation?**

    - The speed of MongoDB aggregation depends on various factors such as the complexity of the aggregation pipeline, the size of the data set, the hardware specifications of the MongoDB server and the efficiency of the indexes.

    - In general, MongoDB’s aggregation framework is designed to efficiently process large volumes of data and complex aggregation operations.

    - When used correctly it can provide fast and scalable aggregation capabilities.

    - So with any database operation, the performance can vary based on the specific use case and configuration.

    - It is important to optimize our aggregation queries and use indexes where appropriate and ensure that our MongoDB server is properly configured for optimal performance.

## databse, cursor and dataTypes

37. **Database**

    - In MongoDB, a database contains the collections of documents. One can create multiple databases on the MongoDB server.

    - View Database: show dbs

    - Naming Restriction for Database: /\. "$\*:|?

    - Creating Database: use database_name

38. **Collection**

    - Collections are just like tables in relational databases, they also store data, but in the form of documents. A single database is allowed to store multiple collections.

    - Creating collection:

    ![alt text](image-7.png)

39. **Document**

    - Document are just like row in relational databases, they also store the data records are stored as BSON documents. Here, BSON stands for binary representation of JSON documents.The document is created using key-value pairs and the value of the field can be of any BSON type.

40. **Schemaless**

    - As we know that MongoDB databases are schemaless. So, it is not necessary in a collection that the schema of one document is similar to another document.

    ![alt text](image-6.png)

41. **MongoDB Cursor**

    - The MongoDB cursor is a pointer that references the documents of the collection returned by the find() method.

    - MongoDB Cursor Example

    ```javascript
    Database: gfg
    Collection: student
    Documents: Three documents contain the details of the students
    ```

    ```javascript
    db.student.find().pretty();
    ```

    ![alt text](image-8.png)

42. **How to Manually Iterate a Cursor in MongoDB**

    - Assigning Cursor to a Var Keyword

    ```javascript
    var mycursor = db.student.find({ studentId: 3 }).pretty();
    mycursor;
    ```

    - Using the next() Method

    ```javascript
    var mycursor = db.student.find({studentId:{$gt:1}});
    > while(mycursor.hasNext()){
    ... print(tojson(mycursor.next()));
    ... }
    ```

    ![alt text](image-9.png)

    - Using the forEach() method

    ![alt text](image-10.png)

    - Using Iterator Index

    ![alt text](image-11.png)

    - Alternate Method:

    ![alt text](image-12.png)

43. **MongoDB Cursor Methods**

    ```javascript
    //count
    db.student.find().count();

    //limit
    db.student.find().limit(2).pretty();

    //size
    db.student.find({ studentId: 1 }).size();

    //sort
    db.student.find().sort({ studentId: -1 }).pretty();
    ```

44. **Datatypes of MongoDB**

    - String: the value of the name field is a string.
    - integer: the integer data type is used to store an integer value. We can store integer data type in two forms 32-bit signed integer and 64-bit signed integer.
    - The double data type is used to store the floating-point values.
    - The boolean data type is used to store either true or false.
    - The null data type is used to store the null value.
    - The Array is the set of values. It can store the same or different data types values in it. In MongoDB, the array is created using square brackets([]).
    - Object data type stores embedded documents. Embedded documents are also known as nested documents. Embedded document or nested documents are those types of documents which contain a document inside another document.
    - This data type stores the undefined values.
    - This datatype is used to store binary data.
    - Date data type stores date. It is a 64-bit integer which represents the number of milliseconds.
    - Min key compares the value of the lowest BSON element and Max key compares the value against the highest BSON element. Both are internal data types.
    - This data type similar to the string data type. It is generally not supported by a mongo shell, but if the shell gets a symbol from the database, then it converts this type into a string type.
    - This datatype is used to store regular expressions.
    - This datatype is used to store JavaScript code into the document without the scope.
    - In MongoDB, this data type is used to store a timestamp.
    - This MongoDB data type store 128-bit decimal-based floating-point value. This data type was introduced in MongoDB version 3.4
    -

## object Id

45. **What is Object ID**

    - Whenever we create a new document in the collection MongoDB automatically creates a unique object id for that document(if the document does not have it).
    - There is an \_id field in MongoDB for each document.
    - The data which is stored in Id is of hexadecimal format and the length of the id is 12 bytes which consist:
      - The first 4 bytes represent the Unix Timestamp of the document.
      - The next 3 bytes are the machine ID on which the MongoDB server is running.
      - The next 2 bytes are of the process ID.
      - The last Field is 3 bytes used for incrementing the objectid.
    - You can also create your own id field, but make sure that the value of that id field must be unique.

    **Key Characteristics of MongoDB ObjectId:**

    - Uniqueness: Ensures each document has a unique identifier within a collection.
    - Timestamp: Embeds a timestamp, allowing you to extract the creation time of the document.
    - Efficiency: Provides a compact, efficient way to generate unique identifiers without requiring coordination across servers.

    **Methods of MongoDB ObjectId**

    - str: Returns the hexadecimal string format of the ObjectId.
    - ObjectId.getTimestamp() : It returns the timestamp portion of the object as a Date.
    - ObjectId.valueOf(): It return the hexadecimal format of a given String Literal.
    - ObjectId.toString(): This method returns ObjectId in String format in javascript representation.

46. **Can I specify my own value for the “\_id” field in MongoDB?**

    - Yes, you can specify your own value for the “\_id” field as long as it is unique within the collection.

47. **What is the purpose of the timestamp in ObjectId?**

    - the creation time of the document,
    - which can be useful for time-based queries and sorting.

48. **How does MongoDB ensure the uniqueness of ObjectId?**

    - MongoDB ensures the uniqueness of ObjectId by combining a timestamp, machine ID, process ID, and a counter, making it nearly impossible to generate the same ObjectId within the same collection.

49. **Can I convert an ObjectId to a different format?**

    - Yes, you can convert an ObjectId to its hexadecimal string format using the str method, and you can also retrieve the timestamp or get its string representation in JavaScript.

## CURD database

50. **Create Database using Mongo Shell**

    - Create a New Database Using Mongo Shell: use Database_Name
    - Show List of Databases: show dbs
    - Check Current Database: dbs
    - Switch to other Database: use tests

51. **Delete Database using MongoShell**

    - db.dropDatabase()

52. **Perform CRUD Operations in MongoDB**

    **Create Operations**

    - db.collection.insertOne(): It is used to insert a single document in the collection.
    - db.collection.insertMany(): It is used to insert multiple documents in the collection.
    - db.createCollection(): It is used to create an empty collection.

    **Read Operations**

    - db.collection.find():It is used to retrieve documents from the collection.

    **Update Operations**

    - db.collection.updateOne(): It is used to update a single document in the collection that satisfy the given criteria.
    - db.collection.updateMany(): It is used to update multiple documents in the collection that satisfy the given criteria.
    - db.collection.replaceOne(): It is used to replace single document in the collection that satisfy the given criteria.

    **Delete Operations**

    - db.collection.deleteOne() It is used to delete a single document from the collection that satisfy the given criteria.
    - db.collection.deleteMany() It is used to delete multiple documents from the collection that satisfy the given criteria.

53. **list of mongoDB method**

    - insert(): Inserts one or more documents into a collection.

    ```javascript
    db.collection.insert([
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
    ]);
    ```

    - insertOne(): Inserts a single document into a collection.

    ```javascript
    db.collection.insertOne({ name: "Alice", age: 25 });
    ```

    - insertMany(): Inserts multiple documents into a collection at once.

    ```javascript
    db.collection.insertMany([
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
    ]);
    ```

    - bulk.insert(): This is used in MongoDB shell when working with bulk operations to insert multiple documents.

    ```javascript
    var bulk = db.collection.initializeOrderedBulkOp();
    bulk.insert({ name: "Alice" });
    bulk.insert({ name: "Bob" });
    bulk.execute();
    ```

    - bulkWrite(): Performs multiple write operations (inserts, updates, deletes) in one call.

    ```javascript
    db.collection.bulkWrite([
      { insertOne: { document: { name: "Alice", age: 25 } } },
      {
        updateOne: { filter: { name: "Alice" }, update: { $set: { age: 26 } } },
      },
    ]);
    ```

    - update(): Updates one or more documents based on the filter criteria.

    ```javascript
    db.collection.update({ name: "Alice" }, { $set: { age: 28 } });
    ```

    - updateOne(): Updates a single document that matches the filter criteria.

    ```javascript
    db.collection.updateOne({ name: "Alice" }, { $set: { age: 28 } });
    ```

    - updateMany(): Updates all documents that match the filter criteria.

    ```javascript
    db.collection.updateMany(
      { age: { $lt: 30 } },
      { $set: { status: "active" } }
    );
    ```

    - find(): Retrieves documents based on the filter criteria.

    ```javascript
    db.collection.find({ age: { $gt: 25 } });
    ```

    - findAndModify(): Modifies and returns a single document. You can update, remove, or replace a document and get the original or modified document.

    ```js
    db.collection.findAndModify({
      query: { name: "Alice" },
      update: { $set: { age: 29 } },
      new: true,
    });
    ```

    - findOne(): Retrieves a single document that matches the filter criteria.

    ```js
    db.collection.findOne({ name: "Alice" });
    ```

    - findOneAndDelete(): Finds a document and removes it from the collection.

    ```js
    db.collection.findOneAndDelete({ name: "Alice" });
    ```

    - findOneAndReplace(): Finds a document and replaces it with a new document.

    ```js
    db.collection.findOneAndReplace(
      { name: "Alice" },
      { name: "Alice", age: 30, status: "active" }
    );
    ```

    - findOneAndUpdate(): Finds a document and updates it, returning the original or updated document.

    ```js
    db.collection.findOneAndUpdate(
      { name: "Alice" },
      { $set: { age: 29 } },
      { returnNewDocument: true }
    );
    ```

    - sort(): Sorts the result set based on the given criteria.

    ```js
    db.collection.find().sort({ age: 1 }); // Sorts by age in ascending order
    ```

    - copyTo(): Copies all documents from one collection to another (deprecated in newer versions).

    ```js
    db.sourceCollection.copyTo("targetCollection");
    ```

    - count(): Counts the number of documents that match the filter criteria.

    ```js
    db.collection.count({ age: { $gt: 25 } });
    ```

    - dropCollection(): Removes an entire collection from the database.

    ```js
    db.collection.drop();
    ```

    - remove(): Removes documents that match the filter criteria.

    ```js
    db.collection.remove({ name: "Alice" });
    ```

    - deleteOne(): Deletes a single document that matches the filter criteria.

    ```js
    db.collection.deleteOne({ name: "Alice" });
    ```

    - deleteMany(): Deletes all documents that match the filter criteria.

    ```js
    db.collection.deleteMany({ age: { $lt: 30 } });
    ```

    - distinct(): Returns an array of unique values for a field in the collection.

    ```js
    db.collection.distinct("age");
    ```

    - limit(): Limits the number of documents returned in a query result.

    ```js
    db.collection.find().limit(5);
    ```

    - skip(): Skips a specified number of documents in the result set.

    ```js
    db.collection.find().skip(5);
    ```

    - ObjectId(): Generates a new MongoDB ObjectId or converts a string to an ObjectId.

    ```js
    var id = ObjectId("507f191e810c19729de860ea");
    ```

    - createIndex(): Creates an index on the specified field(s).

    ```js
    db.collection.createIndex({ name: 1 });
    ```

    - getIndexes(): Lists all the indexes created on a collection.

    ```js
    db.collection.getIndexes();
    ```

    - dropIndexes(): Removes all indexes from a collection.

    ```js
    db.collection.dropIndexes();
    ```

    - dropIndex(): Drops a specific index from a collection.

    ```js
    db.collection.dropIndex("name_1");
    ```

54. **Defining, Creating and Dropping a MongoDB collection**

    ```js
    use myDatabase  // Switch to or create a new database

    db.createCollection("users")

    use myDatabase

    db.products.insertOne({ name: "Laptop", price: 999 })

    //Creating a Capped Collection
    db.createCollection("eventLogs", { capped: true, size: 1048576, max: 1000 })

    //Dropping a Collection:
    db.users.drop()

    //Checking if a Collection Exists:
    db.getCollectionNames().includes("users") //This returns true if the users collection exists, otherwise false.
    ```

55. **Adding and Querying the Data in MongoDB**

    ```js
    //Adding Data in MongoDB
    db.users.insertOne({
      name: "John Doe",
      age: 30,
      email: "johndoe@example.com",
      city: "New York",
    });

    //Insert Multiple Documents
    db.users.insertMany([
      {
        name: "Jane Doe",
        age: 28,
        email: "janedoe@example.com",
        city: "Chicago",
      },
      {
        name: "Mark Smith",
        age: 35,
        email: "marksmith@example.com",
        city: "San Francisco",
      },
    ]);

    db.users.find();
    db.users.find({ age: { $gt: 30 } });
    db.users.findOne({ email: "johndoe@example.com" });
    db.users.find({
      $or: [{ city: "New York" }, { age: { $lt: 25 } }],
    });

    //$exists: Matches documents where the field exists or does not exist
    db.users.find({ email: { $exists: true } });
    db.users.find({ city: { $in: ["New York", "San Francisco"] } });

    //projection
    db.users.find({ age: { $gte: 30 } }, { name: 1, email: 1, _id: 0 });

    //sort  in ascending (1) or descending (-1) order.
    db.collection.find(query).sort({ field: 1 or -1 })
    db.users.find().sort({ age: -1 })

    //The limit() method limits the number of documents returned by a query.
    db.users.find().limit(3)

    // Combining Query Methods
    db.users.find({ age: { $gte: 30 } }, { name: 1, city: 1, _id: 0 })
    .sort({ name: 1 })
    .limit(5)

    //Update Documents
    db.users.updateOne(
    { name: "John Doe" },
    { $set: { age: 31 } }
    )

    db.users.updateMany(
    { city: "New York" },
    { $set: { status: "active" } }
    )

    //Delete Documents
    db.users.deleteOne({ name: "Mark Smith" })
    db.users.deleteMany({ city: "Chicago" })
    ```

56. **How do I create a new collection in MongoDB?**

    - To create a new collection, use the command use collection_name. If the collection does not exist, this command will create it; otherwise, it will switch to the existing collection.

57. **What is the difference between insertOne and insertMany in MongoDB?**

    - The insertOne method is used to insert a single document into a collection, while insertMany allows you to insert multiple documents at once. insertMany takes an array of documents as its argument.

58. **How can I use query operators like $and and $or in MongoDB?**

    - Query operators like $and and $or allow you to specify multiple conditions in a query. For example, $and is used to match documents that satisfy all conditions, while $or matches documents that satisfy at least one of the conditions. These operators can be combined to create complex queries.

59. **How to Create Database and Collection in MongoDB**

    ```js
    use database_name

    show dbs

    db.createCollection('Student');
    db.myNewCollection1.insertOne( { name:"geeksforgeeks" } )
    db.myNewCollection2.insertMany([{name:"gfg", country:"India"},
        {name:"rahul", age:20}
    ])

    show collections
    ```

60. **Can I create a collection without explicitly using the createCollection() method?**

    - Yes, MongoDB creates a collection automatically when you first insert a document into it. However, using createCollection() allows you to specify options for the collection.

61. **How do I switch to a different database in MongoDB?**

    - You can switch to a different database using the use command followed by the name of the database.

62. **Is there a maximum number of databases and collections that can be created in MongoDB?**

    - MongoDB imposes practical limits based on available resources, but there is no hard limit on the number of databases or collections.

63. **Can I create indexes on collections in MongoDB?**

    - Yes, you can create indexes on collections to improve query performance. Use the createIndex() method to create indexes on specific fields.

64. **MongoDB – Query Documents using Mongo Shell**

    ```js
    db.collection.find().pretty();

    db.contributor.find();

    //Select all documents in organized form
    db.contributor.find().pretty();

    //Select documents that satisfy the given condition
    db.collection.find({ field: value });

    //Select documents that satisfy the given condition (Using Query operators):
    db.contributor.find({ language: { $in: ["Java", "C#"] } }).pretty();
    ```

65. **Explain MongoDB Map-Reduce**

    **_What is MongoDB Map-Reduce_**

    - MongoDB Map-Reduce is a data processing model that facilitates operations on large data sets to produce aggregated results. It uses the mapReduce() function comprising map and reduce functions to handle complex data transformations.

    - The map function is used to group all the data based on the key-value and the reduce function is used to perform operations on the mapped data.

    ```js
    db.collectionName.mapReduce(... map(),...reduce(),...query{},...output{});
    ```

    - map() function: It uses the emit() function in which it takes two parameters key and value key. Here the key is on which we make groups like Group By in MySQL.

    - the reduce() function: It is the step in which we perform our aggregate functions like avg(), and sum().

    - query: Here we will pass the query to filter the resultset.

    - output: In this, we will specify the collection name where the result will be stored.

    **_Steps to use Map Reduce in MongoDB_**

    ```js
    {"id":1, "sec":A, "marks":80}
    {"id":2, "sec":A, "marks":90}
    {"id":1, "sec":B, "marks":99}
    {"id":1, "sec":B, "marks":95}
    {"id":1, "sec":C, "marks":90}
    ```

    - Here we need to find the maximum marks in each section. So, our key by which we will group documents is the sec key and the value will be marks. Inside the map function, we use emit(this.sec, this.marks) function, and we will return the sec and marks of each record(document) from the emit function. This is similar to group By MySQL.

    ```js
    var map = function () {
      emit(this.sec, this.marks);
    };

    //{"A":[80, 90]},  {"B":[99, 90]},  {"C":[90] }

    //reduce() function, we have reduced the records now we will output them into a new collection.{out :”collectionName”}
    var reduce = function (sec, marks) {
      return Array.max(marks);
    };

    db.collectionName.mapReduce(map, reduce, { out: "collectionName" });
    ```

    ```js
    {"id":"A", value:90}
    {"id":"B", value:99}
    {"id":"C", value:90}
    ```

    **_Example of MapReduce_**

    ```js
    db.sales.insertMany([
      { product: "Laptop", amount: 1000 },
      { product: "Laptop", amount: 1200 },
      { product: "Phone", amount: 700 },
      { product: "Tablet", amount: 500 },
      { product: "Phone", amount: 300 },
      { product: "Tablet", amount: 600 },
    ]);

    var mapFunction = function () {
      emit(this.product, this.amount);
    };

    var reduceFunction = function (key, values) {
      return Array.sum(values);
    };

    db.sales.mapReduce(mapFunction, reduceFunction, {
      out: "total_sales", // output to a new collection
    });

    db.total_sales.find();
    ```

    ```js
    { "_id" : "Laptop", "value" : 2200 }
    { "_id" : "Phone", "value" : 1000 }
    { "_id" : "Tablet", "value" : 1100 }
    ```

    ```js
    //Using Inline Output
    db.sales.mapReduce(mapFunction, reduceFunction, {
      out: { inline: 1 }, // return results inline
    });
    ```

    - MapReduce is a powerful feature in MongoDB that allows for complex data processing and aggregation across multiple documents.

    - The Map phase processes documents and emits key-value pairs, while the Reduce phase aggregates the results based on the keys emitted by the Map phase.

    - You can choose to store the results in a new collection or return them inline.

66. **Upsert in MongoDB explain with example**

    **_What is an upSert?_**

    - In MongoDB, upsert is a combination of update and insert operations. It allows you to update a document if it exists, and if it doesn’t exist, it inserts a new document.

    **_Syntax for Upsert_**

    ```js
    db.collection.updateOne(filter, update, { upsert: true });
    ```

    - filter: for selecting the document to update.
    - update: The modifications to apply to the document.
    - { upsert: true }: This option tells MongoDB to insert a new document if no document matches the filter.

    **_Example of Upsert in MongoDB_**

    ```js
    //Create a Sample Collection
    db.users.insertMany([
      { name: "Alice", age: 30, email: "alice@example.com" },
      { name: "Bob", age: 25, email: "bob@example.com" },
    ]);

    // Use Upsert to Update an Existing Document
    db.users.updateOne(
      { email: "bob@example.com" }, // filter
      { $set: { age: 26 } }, // update
      { upsert: true } // upsert option
    );

    //Use Upsert to Insert a New Document
    db.users.updateOne(
      { email: "charlie@example.com" }, // filter
      { $set: { name: "Charlie", age: 28 } }, // update
      { upsert: true } // upsert option
    );

    //View the Results
    db.users.find().pretty();

    //result
    { "_id" : ObjectId("..."), "name" : "Alice", "age" : 30, "email" : "alice@example.com" }
    { "_id" : ObjectId("..."), "name" : "Bob", "age" : 26, "email" : "bob@example.com" }
    { "_id" : ObjectId("..."), "name" : "Charlie", "age" : 28, "email" : "charlie@example.com" }
    ```

67. _Create Relationship in MongoDB_

    - In MongoDB, managing relationships between data is crucial for structuring and querying databases effectively. Relationships can be handled using embedded documents, references and the $lookup aggregation stage, each offering different advantages depending on the use case.

    **Relationship in MongoDB**

    - Embedded Documents
    - Reference Model
    - $lookup

    **_Embedded Document Model_**

    - In this model, the documents are embedded inside one document. For example, we have two documents one is a student(which contains the basic information of the student like id, name branch)

    - So, instead of creating two different documents, we embed the address documents inside the student document.

    - It will help the user to retrieve the data using a single query rather than writing a bunch of queries.

    **_When to Use Embedded Documents:_**

    - When the related data is tightly coupled and often accessed together (e.g., orders within a customer document).

    - When the data grows large and you don’t want to embed all of it in a single document.

    **_Advantages_**

    - Simpler queries and faster read operations.

    - No need for expensive joins; data is fetched together.

    **_Disadvantages_**

    - Large documents can impact performance and make updates more complex.

    - Less flexible if related data needs to be updated independently.

    **_Reference Model_**

    - In this model, we maintain the documents separately but one document contains the reference of the other documents.

    - For example, we have two documents one is a student(which contains the basic information of the student like id, name branch) and another is an address document(which contains the address of the student).

    - So, here student document contains the reference to the address document’s id field. Now using this reference id we can query the address and get the address of the student.

    - This model is generally used to design the normalized relationships.

    **_Advantages_**

    - More flexibility and scalability.

    - Documents remain smaller and easier to update independently

    **_Disadvantages_**

    - Requires multiple queries or joins to fetch related data.

    - Slightly more complex to manage relationships.

    ```js
    //customers
    {
        _id: ObjectId("601d1b6d5f34b1"),
        name: "John Doe",
        email: "john.doe@example.com"
    }

    //orders
    {
        _id: ObjectId("601d1b7a7f41b"),
        customerId: ObjectId("601d1b6d5f34b1"), // Reference to the customer
        product: "Laptop",
        quantity: 1,
        total: 1200
    }

    //Querying with References
    db.orders.find({ customerId: ObjectId("601d1b6d5f34b1") }).pretty();
    ```

    **_$lookup for Joins (Using the Aggregation Framework)_**

    ```js
    //customers
    {
    _id: ObjectId("601d1b6d5f34b1"),
    name: "John Doe",
    email: "john.doe@example.com"
    }

     //orders
    {
        _id: ObjectId("601d1b7a7f41b"),
        customerId: ObjectId("601d1b6d5f34b1"), // Reference to the customer
        product: "Laptop",
        quantity: 1,
        total: 1200
    }

    db.customers.aggregate([
    {
      $lookup: {
         from: "orders", // The collection to join with
         localField: "_id", // Field from the 'customers' collection
         foreignField: "customerId", // Field from the 'orders' collection
         as: "customerOrders" // Alias for the joined data
      }
    }
    ]).pretty();
    ```

    ```js
    {
    "_id": ObjectId("601d1b6d5f34b1"),
    "name": "John Doe",
    "email": "john.doe@example.com",
    "customerOrders": [
      {
         "_id": ObjectId("601d1b7a7f41b"),
         "customerId": ObjectId("601d1b6d5f34b1"),
         "product": "Laptop",
         "quantity": 1,
         "total": 1200
      },
      {
         "_id": ObjectId("601d1b8a7f41b"),
         "customerId": ObjectId("601d1b6d5f34b1"),
         "product": "Mouse",
         "quantity": 2,
         "total": 40
      }
    ]
    }

    ```

    **_Advantages:_**

    - Allows for powerful and flexible joins between collections without denormalizing data.

    - The aggregation framework is highly customizable, enabling you to filter, group, or transform the data after the join.

    **_Disadvantages:_**

    - Joins can be more expensive in terms of performance compared to embedded documents, especially on large collections.

    - Aggregation queries can be more complex than standard queries.

    **_Summary_**

    - Embedded Documents: Use when related data is tightly coupled and accessed together (e.g., orders inside a customer document). Ideal for small datasets with infrequent updates.

    - Reference Model: Use when related data is frequently updated independently, or when you want to keep documents smaller and more modular (e.g., separate customers and orders collections).

    - $lookup (Joins): Use for many-to-many relationships, or when you need to combine data from multiple collections in a single query using MongoDB’s aggregation framework.

    **_One-to-One Relationships with Embedded Documents_**

68. _Export Data from MongoDB_

    **Using mongoexport**

    - The mongoexport tool is a command-line utility that comes with MongoDB and is designed specifically for exporting data from MongoDB collections in JSON or CSV format.

    ```bash
    mongoexport --uri="mongodb://<host>:<port>/<database>" --collection=<collection> --out=<output file> --type=<json|csv> --fields=<field list>
    ```

    - --uri: The MongoDB connection string, including the database.

    - --collection: The collection you want to export data from.

    - --out: The file where the exported data will be saved.

    - --type: The output format, either json or csv.

    - --fields: (Optional) A comma-separated list of fields to include in the output (for CSV format).

    **_Example 1: Export to JSON_**

    ```bash
    mongoexport --uri="mongodb://localhost:27017/shop" --collection=customers --out=customers.json --type=json
    ```

    **_Example 2: Export to CSV_**

    ```bash
    mongoexport --uri="mongodb://localhost:27017/shop" --collection=customers --out=customers.csv --type=csv --fields=name,email
    ```

    **Using MongoDB Atlas Data Explorer**

    - Go to Data Explorer in the Atlas UI
    - Select the database and collection you want to export.
    - Use the Export Collection option to download the data in JSON format.

    **Export Data Using a MongoDB Query**

    - You can also export data using a specific query. For instance, if you only want to export documents that match certain criteria, you can use the --query parameter in mongoexport.

    **_Export data matching a query to JSON_**

    ```bash
    mongoexport --uri="mongodb://localhost:27017/shop" --collection=customers --out=new_york_customers.json --type=json --query='{ "city": "New York" }'
    ```

    **_Export data matching a query to CSV_**

    ```bash
    mongoexport --uri="mongodb://localhost:27017/shop" --collection=customers --out=new_york_customers.csv --type=csv --fields=name,email --query='{ "city": "New York" }'
    ```

    **Export Data Using MongoDB Compass**

    - Open MongoDB Compass and connect to your MongoDB instance.
    - Select the database and collection you want to export.
    - Use the Export Collection button (found in the toolbar at the top).
    - Choose the format (JSON or CSV) and the fields you want to include.
    - Click Export to save the file to your machine

    **Export Data Using Aggregation Pipelines (For Complex Exports)**

    **_Example: Using mongoexport with an aggregation pipeline_**

    ```bash
    mongoexport --uri="mongodb://localhost:27017/shop" --collection=customers --out=customer_orders.json --type=json --pipeline='[{"$lookup": { "from": "orders", "localField": "_id", "foreignField": "customerId", "as": "orders"}}, {"$project": { "name": 1, "totalOrders": { "$size": "$orders" }}}]'
    ```

    **Export Data Programmatically Using Node.js**

    **_Example using Node.js:_**

    ```javascript
    const { MongoClient } = require("mongodb");
    const fs = require("fs");

    async function exportData() {
      const uri = "mongodb://localhost:27017";
      const client = new MongoClient(uri);

      try {
        await client.connect();
        const database = client.db("shop");
        const collection = database.collection("customers");

        // Query the data you want to export
        const cursor = collection.find({});

        // Write the data to a file in JSON format
        const writeStream = fs.createWriteStream("customers.json");
        writeStream.write("[");

        let first = true;
        await cursor.forEach((doc) => {
          if (!first) writeStream.write(",");
          writeStream.write(JSON.stringify(doc, null, 2));
          first = false;
        });

        writeStream.write("]");
        writeStream.end();

        console.log("Export completed!");
      } finally {
        await client.close();
      }
    }

    exportData().catch(console.error);
    ```

    - This script exports all documents from the customers collection in the shop database to a customers.json file.

69. _Import data to MongoDB_

    - To import data into MongoDB, you can use various tools and methods, depending on your source format (JSON, CSV, BSON) and environment (local MongoDB, MongoDB Atlas, MongoDB Compass, etc.). Below are the most common ways to import data into MongoDB.

    **Using mongoimport**

    ```bash
    mongoimport --uri="mongodb://<host>:<port>/<database>" --collection=<collection> --file=<input file> --type=<json|csv|tsv> --headerline --jsonArray
    ```

    - --uri: Specifies the MongoDB connection string.
    - --collection: The target collection where data will be imported.
    - --file: The path to the file you want to import.
    - --type: The format of the input file (e.g., json, csv, or tsv).
    - --headerline: Use the first line of the CSV/TSV file as field names (for CSV and TSV files).
    - --jsonArray: Required for importing JSON arrays.

    **Example 1: Import JSON Data into MongoDB**

    ```json
    //customers.json
    [
      {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "city": "New York"
      },
      {
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "city": "Los Angeles"
      }
    ]
    ```

    ```bash
    mongoimport --uri="mongodb://localhost:27017/shop" --collection=customers --file=customers.json --jsonArray
    ```

    - This command will import the documents from customers.json into the customers collection in the shop database.

    **Example 2: Import CSV Data into MongoDB**

    ```csv
    name,email,city
    John Doe,john.doe@example.com,New York
    Jane Smith,jane.smith@example.com,Los Angeles
    ```

    ```bash
    mongoimport --uri="mongodb://localhost:27017/shop" --collection=customers --type=csv --file=customers.csv --headerline
    ```

    **2. Importing Data Using MongoDB Compass**

    Steps:

    - Open MongoDB Compass and connect to your MongoDB instance.
    - Select the database and collection where you want to import data.
    - Click the Collection tab and look for the Import Data button.
    - Select the file you want to import (CSV, JSON, etc.).
    - Choose the appropriate file format and fields.
    - Click Import to load the data into the collection.

    **3. Importing Data into MongoDB Atlas**

    ```bash
    mongoimport --uri="mongodb+srv://username:password@cluster.mongodb.net/shop" --collection=customers --file=customers.json --jsonArray
    ```

    **4. Programmatically Importing Data Using Node.js**

    ```js
    const { MongoClient } = require("mongodb");
    const fs = require("fs");

    async function importData() {
      const uri = "mongodb://localhost:27017";
      const client = new MongoClient(uri);

      try {
        await client.connect();
        const database = client.db("shop");
        const collection = database.collection("customers");

        // Read the JSON data from the file
        const data = JSON.parse(fs.readFileSync("customers.json", "utf8"));

        // Insert the data into the collection
        await collection.insertMany(data);
        console.log("Data import completed!");
      } finally {
        await client.close();
      }
    }

    importData().catch(console.error);
    ```

    **5. Importing BSON Data**

    - If you have a BSON dump (created by mongodump), you can use mongorestore to import the data back into MongoDB.

    ```bash
    mongorestore --uri="mongodb://localhost:27017" --db=shop /path/to/dump
    ```

    - This command will restore the entire shop database from a BSON dump.

70. **MongoDB – Regex**

    **MongoDB Regex Syntax**

    - MongoDB supports regular expressions using the $regex operator or the JavaScript regular expression literal /pattern/. The syntax is similar to regular expressions in many programming languages.

    - Basic Regex Query Format:

    ```js
    { <field>: { $regex: /pattern/, $options: '<options>' } }
    ```

    - pattern: The regular expression pattern to match.
    - options: Optional modifiers to control the behavior of the regex (e.g., case insensitivity).

    **Examples of MongoDB Regex Queries**

    **_Case-Sensitive Search_**

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

    ```js
    db.users.find({ name: { $regex: /^John/ } });
    ```

    - Explanation: ^John means the string should start with "John". This search is case-sensitive by default.

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

    **_Case-Insensitive Search_**

    ```js
    db.users.find({ name: { $regex: /^john/, $options: "i" } });
    ```

    - Explanation: i makes the query case-insensitive, so it will match both "John" and "john".

    **_Matching a Substring_**

    ```js
    db.users.find({ email: { $regex: /example/ } });
    ```

    - Explanation: The example pattern matches anywhere in the string.

    **_Using Multiple Regex Options_**

    ```js
    db.users.find({ name: { $regex: /doe$/, $options: "im" } });
    ```

    - Explanation: The pattern doe$ means "Doe" at the end of the string. The i makes it case-insensitive, and m allows multiline matching.

    **_Matching Fields with No Specific Pattern_**

    ```js
    db.users.find({ email: { $regex: /\..*com$/ } });
    ```

    - To find documents where the email field contains any character followed by a dot and then "com" (.com)

    - Explanation: \. matches a literal dot, .\* matches any number of any characters, and com$ matches "com" at the end of the string.

    **_Combining Regex with Other MongoDB Query Operators_**

    - Example: Find users whose name contains "John" and email ends with ".com":

    ```js
    db.users.find({
      $and: [{ name: { $regex: /John/ } }, { email: { $regex: /\.com$/ } }],
    });
    ```

    **_Modifiers for MongoDB Regex_**

    - i: Case-insensitive matching.

      - Example: { $regex: /john/i } will match "John", "JOHN", or "john".

    - m: Multiline matching.

      - Example: { $regex: /john$/m } will match "John" if it appears at the end of a line in a multi-line string.

    - x: Extended capability for ignoring white spaces within the regex pattern.

      - Example: { $regex: / j o h n /x } will match "john" because spaces are ignored.

    - s: Allows the dot (.) to match all characters, including newlines.

      - Example: { $regex: /.\*/s } matches all characters, including newlines.

    **Performance Considerations**

    - Index with Case-Insensitive Collation

    ```js
    db.users.createIndex(
      { name: 1 },
      { collation: { locale: "en", strength: 2 } }
    );
    ```

71. **MongoDB Projection**

    - In MongoDB, projection is used to specify which fields of the document should be included or excluded when querying a collection.

    **Syntax for Projection**

    ```js
    db.collection.find(query, projection);
    ```

    - query: The query filter to find documents.
    - projection: The fields to include or exclude.
    - Inclusion (1): Only the specified fields are returned.
    - Exclusion (0): All fields except the specified ones are returned.

    **Examples of Projection**

    **Example 1: Include Specific Fields**

    _Find all users and include only their name and email fields._

    ```js
    db.users.find({}, { name: 1, email: 1 });
    ```

    ```json
    //results
    {
        "_id": 1,
        "name": "John Doe",
        "email": "john@example.com"
    }
    {
        "_id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com"
    }
    ```

    **Example 2: Exclude Specific Fields**

    _Query: Find all users and exclude the email field._

    ```js
    db.users.find({}, { email: 0 });
    ```

    ```json
    {
        "_id": 1,
        "name": "John Doe"
    }
    {
        "_id": 2,
        "name": "Jane Smith"
    }
    ```

    **Example 3: Exclude \_id Field**

    _Query: Find all users and exclude the \_id field._

    ```js
    db.users.find({}, { _id: 0, name: 1, email: 1 });
    ```

    ```json
    {
    "name": "John Doe",
    "email": "john@example.com"
    }
    {
    "name": "Jane Smith",
    "email": "jane@example.com"
    }
    ```

    **Example 4: Project Fields in Nested Documents**

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "address": {
        "city": "New York",
        "zip": "10001"
      }
    }
    ```

    _Query: Include only the city field inside the address field._

    ```js
    db.users.find({}, { "address.city": 1, _id: 0 });
    ```

    ```json
    {
      "address": {
        "city": "New York"
      }
    }
    ```

    **Example 5: Use Projection with Query**

    _Query: Find users with the name "John Doe" and return only their email._

    ```js
    db.users.find({ name: "John Doe" }, { email: 1, _id: 0 });
    ```

    ```json
    {
      "email": "john@example.com"
    }
    ```

    **Example 6: Projection of Array Elements**

    ```json
    {
      "_id": 1,
      "name": "John",
      "grades": [
        { "subject": "Math", "score": 95 },
        { "subject": "English", "score": 88 }
      ]
    }
    ```

    _Query: Return only the name and subject field from the grades array._

    ```js
    db.users.find({}, { name: 1, "grades.subject": 1, _id: 0 });
    ```

    ```json
    {
      "name": "John",
      "grades": [{ "subject": "Math" }, { "subject": "English" }]
    }
    ```

    **Example 7: Slice Array Elements**

    _Query: Return only the first element from the grades array._

    - You can use the $slice operator to limit the number of array elements returned in a projection.

    ```js
    db.users.find({}, { name: 1, grades: { $slice: 1 }, _id: 0 });
    ```

    ```json
    {
      "name": "John",
      "grades": [{ "subject": "Math", "score": 95 }]
    }
    ```

72. **MongoDB – Embedded Documents**

    - Embedded documents in MongoDB are subdocuments that are stored directly within a parent document.

    **Advantages of Embedded Documents**

    - Data Locality: Since related data is stored together, queries that need the entire document (including embedded data) are faster and more efficient.

    - Atomic Operations: Updates to a document, including its embedded documents, are atomic. This ensures consistency.

    - Denormalized Structure: Embedded documents can represent one-to-one and one-to-many relationships within a single document.

    **Example Structure of an Embedded Document**

    _1. Inserting a Document with an Embedded Document_

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "zip": "10001"
      }
    }
    ```

    _2. Querying Embedded Documents_

    ```js
    db.users.find({ "address.city": "New York" });
    ```

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "zip": "10001"
      }
    }
    ```

    **3. Updating Fields in Embedded Documents**

    ```js
    db.users.updateOne(
      { name: "John Doe" },
      { $set: { "address.zip": "10002" } }
    );
    ```

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "zip": "10002"
      }
    }
    ```

    **4. Adding Fields to an Embedded Document**

    _Add Field Example: Add a country field to the address embedded document._

    ```js
    db.users.updateOne(
      { name: "John Doe" },
      { $set: { "address.country": "USA" } }
    );
    ```

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "zip": "10002",
        "country": "USA"
      }
    }
    ```

    **Removing Fields from an Embedded Document**

    - Remove Field Example: Remove the zip field from the address embedded document.

    ```js
    db.users.updateOne({ name: "John Doe" }, { $unset: { "address.zip": "" } });
    ```

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "country": "USA"
      }
    }
    ```

    **6. Querying for Documents with a Specific Embedded Document**

    _Query Example: Find users with an address that matches exactly._

    ```js
    db.users.find({
      address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001",
      },
    });
    ```

    - Explanation: The query looks for an exact match of the address subdocument, including all fields.

    **7. Using Embedded Arrays of Documents**

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "orders": [
        { "product": "Laptop", "quantity": 1 },
        { "product": "Phone", "quantity": 2 }
      ]
    }
    ```

    - Query Example: Find users who have ordered a "Laptop".

    ```js
    db.users.find({ "orders.product": "Laptop" });
    ```

    ```json
    {
      "_id": 1,
      "name": "John Doe",
      "orders": [
        { "product": "Laptop", "quantity": 1 },
        { "product": "Phone", "quantity": 2 }
      ]
    }
    ```

    - Explanation: The dot notation ("orders.product") allows querying an array of embedded documents for a specific field value.

    **When to Use Embedded Documents**

    - One-to-One Relationships: When there is a strict one-to-one relationship between documents, such as a user and their profile.

    - One-to-Many Relationships: When a document logically contains multiple related items, such as an order containing multiple products.

    - Performance Consideration: When you frequently access the embedded data along with the parent document, embedding it can improve read performance.

73. **Explain Aggregation pipelines in MongoDB**

    - Aggregation pipelines in MongoDB are a powerful framework for data processing and analysis, enabling users to perform operations such as filtering, grouping, and transforming data.

    **Key Concepts of Aggregation Pipelines**

    - Pipeline Stages: Each stage processes the documents in the pipeline. The stages are executed in the order they are defined.

    - Operators: Each stage can utilize various operators to perform specific operations, like filtering, sorting, or grouping.

    - Document-Based: The framework works directly on documents, making it straightforward to manipulate complex data structures.

    **Common Stages in Aggregation Pipelines**

    - $match: Filters documents based on specified criteria, similar to the find() method.
    - $group: Groups documents by specified fields and allows aggregation functions like sum, avg, count, etc.
    - $sort: Sorts the documents in a specified order.
    - $limit: Limits the number of documents returned.
    - $skip: Skips a specified number of documents.
    - $unwind: Deconstructs an array field from the input documents to output a document for each element.
    - $lookup: Performs a left outer join with another collection to filter in documents from the joined collection.

    **Filtering Documents with $match**

    ```js
    db.orders.aggregate([{ $match: { status: "shipped" } }]);
    ```

    - Explanation: This pipeline filters the orders collection to include only those documents where the status field is "shipped".

    **Grouping Data with $group**

    - Group a documents by specific field

    ```js
    db.orders.aggregate([
      {
        $group: {
          _id: "$customerId", // Group by customerId
          totalAmount: { $sum: "$amount" }, // Calculate total amount spent by each customer
          orderCount: { $count: {} }, // Count total orders per customer
        },
      },
    ]);
    ```

    - This pipeline groups the orders by customerId, calculating the total amount spent and the number of orders per customer.

    **Sorting Results with $sort**

    - The $sort stage allows you to sort documents based on one or more fields.

    ```js
    db.orders.aggregate([
      { $match: { status: "shipped" } },
      { $sort: { orderDate: -1 } }, // Sort by orderDate in descending order
    ]);
    ```

    **Reshaping Documents with $project**

    - The $project stage is used to include or exclude specific fields

    ```js
    db.orders.aggregate([
      {
        $project: {
          _id: 0, // Exclude the _id field
          customerId: 1, // Include the customerId field
          totalAmount: { $multiply: ["$amount", "$quantity"] }, // Create a new field for total amount
        },
      },
    ]);
    ```

    **Limiting and Skipping Results with $limit and $skip**

    - $limit: Limits the number of documents returned.
    - $skip: Skips a specified number of documents.

    ```js
    db.orders.aggregate([
      { $match: { status: "shipped" } },
      { $sort: { orderDate: -1 } },
      { $limit: 5 }, // Limit to the most recent 5 shipped orders
      { $skip: 2 }, // Skip the first 2 documents
    ]);
    ```

    **6. Working with Arrays using $unwind**

    - The $unwind stage deconstructs an array field from the input documents,

    ```js
    db.products.aggregate([
      { $unwind: "$tags" }, // Deconstruct the tags array
      { $group: { _id: "$tags", count: { $sum: 1 } } }, // Count occurrences of each tag
    ]);
    ```

    - This pipeline unwinds the tags array from each product, then groups by tags to count how many times each tag appears.

    **Joining Collections with $lookup**

    ```js
    db.orders.aggregate([
      {
        $lookup: {
          from: "customers", // The collection to join with
          localField: "customerId", // Field from the orders collection
          foreignField: "_id", // Field from the customers collection
          as: "customerDetails", // Output array field
        },
      },
    ]);
    ```

    - This pipeline adds an array called customerDetails to each order document, containing matching customer documents based on the customerId field.

74. **How to Enable Authentication on MongoDB?**

    **How to Enable Authentication on MongoDB?**

    ```bash
    mongod --dbpath /path/to/your/data --port 27017
    ```

    **Step 2: Create an Administrative User**

    - Open a new terminal window and connect to the MongoDB shell using the mongo command:

    ```bash
    mongo --port 27017
    ```

    - Switch to the admin database:

    ```bash
    use admin
    ```

    - Create an administrative user with the userAdminAnyDatabase role. You can also grant other roles based on your requirements. For example:

    ```js
    db.createUser({
      user: "admin",
      pwd: "yourPassword", // Change to a strong password
      roles: [{ role: "userAdminAnyDatabase", db: "admin" }],
    });
    ```

    **Step 3: Enable Authentication in the Configuration File**

    - Stop the MongoDB server if it's running.
    - Open the MongoDB configuration file, usually named mongod.conf. This file is typically located in /etc/mongod.conf or /usr/local/etc/mongod.conf, depending on your installation method.
    - Find the security section in the configuration file (if it doesn't exist, you can add it). Then, enable authorization by adding the following lines:

    ```bash
    security:
        authorization: "enabled"
    ```

    **Step 4: Restart MongoDB with Authentication**

    ```bash
    mongod --config /path/to/mongod.conf
    ```

    ```bash
    sudo service mongod restart
    ```

    **Step 5: Connect with Authentication**

    - Now that authentication is enabled, you will need to provide credentials when connecting to the MongoDB shell.

    ```bash
    mongo --port 27017 -u "admin" -p "yourPassword" --authenticationDatabase "admin"
    ```

    **Step 6: Create Additional Users (Optional)**

    ```bash
    use yourDatabase
    ```

    ```js
    db.createUser({
      user: "appUser",
      pwd: "appUserPassword", // Change to a strong password
      roles: [{ role: "readWrite", db: "yourDatabase" }],
    });
    ```

75. **Create user and add role in MongoDB**

    **Step 1: Connect to MongoDB**

    ```bash
    mongo --port 27017 -u "admin" -p "yourPassword" --authenticationDatabase "admin"
    ```

    **Step 2: Switch to the Desired Database**

    ```js
    use myDatabase
    ```

    **Step 3: Create a User**

    ```js
    db.createUser({
      user: "username",
      pwd: "password", // Replace with a strong password
      roles: [{ role: "roleName", db: "databaseName" }],
    });
    ```

    **Example: Create a Read-Write User**

    ```js
    db.createUser({
      user: "appUser",
      pwd: "appUserPassword", // Replace with a strong password
      roles: [{ role: "readWrite", db: "myDatabase" }],
    });
    ```

    **Step 4: Assign Additional Roles (if needed)**

    ```js
    db.createUser({
      user: "reportUser",
      pwd: "reportUserPassword", // Replace with a strong password
      roles: [
        { role: "read", db: "reportsDatabase" },
        { role: "readWrite", db: "myDatabase" },
      ],
    });
    ```

    **Step 5: Verify User Creation**

    ```js
    db.getUsers();
    ```

    **Step 6: Disconnect and Reconnect as the New User**

    ```js
    mongo --port 27017 -u "appUser" -p "appUserPassword" --authenticationDatabase "myDatabase"
    ```

    **Step 7: Check User Roles**

    - Once logged in as the new user, you can verify their roles:

    ```js
    db.runCommand({ connectionStatus: 1 });
    ```

76. **MongoDB – Replication and Sharding**

    - Replication and sharding are two essential features of MongoDB that enhance data availability, reliability, and scalability. Here’s a comprehensive overview of both concepts:

    **What is Replication?**

    - Replication in MongoDB is the process of synchronizing data across multiple servers (nodes) to ensure high availability and redundancy. It allows your database to maintain multiple copies of the same data, which can help prevent data loss and improve read performance.

    - A replica set is a group of MongoDB servers that maintain the same dataset.

    - Primary Node: Accepts all write operations. There can only be one primary node at a time.

    - Secondary Nodes: Replicate the data from the primary node and can serve read requests. Secondary nodes can be configured to handle read operations for load balancing.

    - Election Process: If the primary node goes down, an election process occurs among the secondary nodes to select a new primary.

    **Setting Up Replication**

    - Start MongoDB with Replica Set Configuration: When starting each MongoDB instance, use the --replSet option to specify the replica set name.

    ```js
    mongod --replSet "myReplicaSet" --port 27017 --dbpath /data/db1
    ```

    **Connect to the MongoDB Shell:**

    ```js
    mongo --port 27017
    ```

    **Initialize the Replica Set**

    ```js
    rs.initiate();
    ```

    **Add Secondary Nodes**

    ```js
    rs.add("hostname:port");
    ```

    **Check Replica Set Status**

    ```js
    rs.status();
    ```

    **Benefits of Replication**

    - High Availability: If the primary node fails, a secondary node can take over without downtime.
    - Data Redundancy: Multiple copies of data protect against data loss.
    - Read Scaling: Secondary nodes can serve read requests, reducing the load on the primary.

    **MongoDB Sharding**

    - Sharding is the process of distributing data across multiple servers (shards) to achieve horizontal scalability. It enables MongoDB to handle large datasets and high-throughput operations by dividing the dataset into smaller, manageable pieces.

    **Setting Up Sharding**

    _Start Config Servers:_

    ```js
    mongod --configsvr --replSet configReplSet --port 27019 --dbpath /data/config
    ```

    _Start Shards:_

    ```js
    mongod --replSet shard1ReplSet --port 27018 --dbpath /data/shard1
    ```

    _Start the Mongos Router:_

    ```js
    mongos --configdb configReplSet/hostname:27019
    ```

    _Connect to the Mongos Instance:_

    ```js
    mongo --port 27020
    ```

    _Add Shards to the Cluster:_

    ```js
    sh.addShard("shard1ReplSet/hostname:27018");
    ```

    _Enable Sharding for a Database:_

    ```js
    sh.enableSharding("myDatabase");
    ```

    _Shard a Collection:_

    ```js
    sh.shardCollection("myDatabase.myCollection", { shardKeyField: 1 });
    ```

    **Benefits of Sharding**

    - Horizontal Scalability: Distributes data across multiple servers, allowing for increased capacity as data grows.
    - Performance: Improved performance by distributing read and write loads across shards.
    - Flexibility: Shards can be added or removed dynamically as needed.

77. **MongoDB – Backup and Restoration**

    **Backup Methods**

    1. **Mongodump**

    - mongodump is a command-line utility that creates a binary export of the contents of a MongoDB database. This method is useful for creating a full or partial backup of your database.

    ```js
    mongodump --db <database_name> --out <output_directory>
    ```

    - To back up a database named myDatabase:

    ```js
    mongodump --db myDatabase --out /path/to/backup/
    ```

    - --gzip: Compress the output files.
    - --collection <collection_name>: Backup a specific collection instead of the entire database.
    - --host <hostname>: Specify the hostname of the MongoDB instance.

    **File System Snapshots**

    - Ensure that all write operations are completed
    - Take a snapshot of the data directory while the MongoDB instance is running (use your file system’s snapshot tools, like LVM snapshots for Linux).
    - Restore the snapshot by copying the data directory back to the MongoDB server.

    **Cloud Backup Services**

    **Restore Methods**

    1. **MongoRestore**

    - mongorestore is the command-line utility for restoring data from a backup created using mongodump.

    ```js
    mongorestore --db <database_name> <path_to_dump>
    ```

    - To restore a database named myDatabase from a backup:

    ```js
    mongorestore --db myDatabase /path/to/backup/myDatabase/
    ```

    - --drop: Drops each collection from the database before restoring from the dump.
    - --gzip: Decompresses gzip-compressed backups during restoration.
    - --collection <collection_name>: Restore a specific collection.

    2. **Restoring from File System Snapshots**

    - Stop the MongoDB service:\*\*

    ```js
    sudo systemctl stop mongod
    ```

    - Copy the snapshot files to the data directory:

    ```js
    cp -r /path/to/snapshot/* /var/lib/mongodb/
    ```

    - Start the MongoDB service:

    ```js
    sudo systemctl start mongod
    ```

    **Restoring from MongoDB Atlas**

    - Log in to the MongoDB Atlas dashboard.
    - Select your cluster and navigate to the "Backups" tab.
    - Choose the backup snapshot you want to restore from.
    - Click on "Restore" and follow the prompts to restore your cluster to a new or existing database.

    **Best Practices for Backup and Restoration**

    - Regular Backups: Schedule regular backups to ensure that your data is consistently protected.
    - Test Restores: Periodically test your backup restoration process to ensure that your backups are valid and can be restored when needed.
    - Monitor Backup Health: Implement monitoring to ensure that backups complete successfully without errors.
    - Store Backups Securely: Ensure that backups are stored in a secure location, separate from the production environment.
    - Automate: Use automation tools to streamline the backup and restoration process.
