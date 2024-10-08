## DNS Module

1.  **What is DNS**

    - Node.js DNS (Domain Name System) It allows you to The DNS module is asynchronous by default and is useful for networking and resolving domain-related information in Node.js applications.

2.  **Key features of DNS**

    - DNS Lookup: Methods like dns.lookup() resolve domain names to IP addresses, which is useful for network communications and server configurations.
    - Reverse DNS Lookup: dns.reverse() allows you to find domain names associated with a given IP address, providing a way to perform reverse lookups.
    - Querying DNS Records: Functions such as dns.resolve() and dns.resolve4() retrieve various DNS records like A (address) records and AAAA (IPv6 address) records.
    - Caching: Node.js automatically caches DNS lookups, improving performance and reducing the need for repeated queries to DNS servers.
    - Error Handling: Provides error handling for various DNS operations, helping to manage and troubleshoot issues related to domain resolution.

3.  **Benefits of DNS**

    - Efficient Networking: Simplifies the process of resolving domain names and managing IP addresses, which is crucial for network-based applications.
    - Versatility: Provides various methods for querying and resolving DNS records, allowing for comprehensive DNS management.
    - Performance: Built-in caching of DNS results reduces the need for repetitive queries, enhancing performance and reducing latency.
    - Error Management: Robust error handling helps in diagnosing and addressing DNS-related issues effectively.

4.  **DNS Method**

    - dns.lookup(): Resolves a hostname into an IP address (uses the system's DNS resolver).

    ```javascript
    const dns = require("dns");
    dns.lookup("example.com", (err, address, family) => {
      console.log("IP address:", address);
    });
    ```

    - dns.resolve(): Resolves a hostname into an array of IP addresses by querying the DNS server directly for a specific record type (e.g., A, AAAA, MX).

    ```javascript
    dns.resolve("example.com", "A", (err, addresses) => {
      console.log("Addresses:", addresses);
    });
    ```

    - dns.resolve4(): Resolves a domain name to an array of IPv4 addresses.

    ```javascript
    dns.resolve4("example.com", (err, addresses) => {
      console.log("IPv4 addresses:", addresses);
    });
    ```

    - dns.resolve6(): Resolves a domain name to an array of IPv6 addresses.

    ```javascript
    dns.resolve6("example.com", (err, addresses) => {
      console.log("IPv6 addresses:", addresses);
    });
    ```

    - dns.reverse(): Performs a reverse DNS lookup, resolving an IP address to a hostname.

    ```javascript
    dns.reverse("8.8.8.8", (err, hostnames) => {
      console.log("Hostnames:", hostnames);
    });
    ```

    - dns.resolveMx(): Resolves the mail exchange (MX) records for a domain.

    ```javascript
    dns.resolveMx("example.com", (err, addresses) => {
      console.log("MX records:", addresses);
    });
    ```

    - dns.resolveCname(): Resolves canonical name (CNAME) records for a domain.

    ```javascript
    dns.resolveCname("example.com", (err, addresses) => {
      console.log("CNAME records:", addresses);
    });
    ```

    - dns.setServers(): Sets custom DNS servers to be used for resolution.

    ```javascript
    dns.setServers(["8.8.8.8", "8.8.4.4"]); // Google's DNS servers
    ```

5.  **Example of DNS Lookup**

    ```javascript
    const dns = require("dns");

    dns.lookup("example.com", (err, address) => {
      if (err) throw err;
      console.log("IP address:", address); // Prints the IP address of the domain
    });
    ```

6.  **Use Cases**

    - Resolving domain names into IP addresses for network communications.
    - Performing reverse lookups to get the hostname from an IP address.
    - Querying specific DNS records like MX for email routing or CNAME for aliases.

## File System Module

7.  **What is File System(fs)**

    - The File System module is essential in Node.js for working with files and directories, making it possible to handle various file operations both synchronously and asynchronously.

8.  **Key Features of FileSystem**

    - Asynchronous and Synchronous Methods: Provides both non-blocking and blocking methods for various file operations.
    - Error Handling: Includes robust error handling to manage issues such as file not found or permission errors.
    - Directory Management: Allows creation, deletion, and listing of directories.

9.  **What is Synchronous and Asynchronous approach?**

    **Synchronous approach:**

    - They are called blocking functions as it waits for each operation to complete
    - Block the execution of code until the operation completes (e.g., fs.readFileSync()).

    **Asynchronous approach:**

    - They are called non-blocking functions as it never waits for each operation to complete
    - Do not block the execution of code. They provide a callback once the operation completes (e.g., fs.readFile()).

10. **Benefits of File System**

    - Enables efficient reading, writing, and updating of files.
    - Supports a wide range of file system operations.
    - Provides detailed error messages to help with troubleshooting.

11. **Key Methods of the fs Module**

    - fs.readFile(): Reads the contents of a file asynchronously.

    ```javascript
    const fs = require("fs");
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    ```

    - fs.readFileSync(): Reads the contents of a file synchronously (blocking).

    ```javascript
    const data = fs.readFileSync("example.txt", "utf8");
    console.log(data);
    ```

    - fs.writeFile(): Writes data to a file asynchronously. If the file doesn't exist, it creates a new file; if it exists, it overwrites the content.

    ```javascript
    fs.writeFile("example.txt", "Hello, World!", (err) => {
      if (err) throw err;
      console.log("File written successfully!");
    });
    ```

    - fs.writeFileSync(): Writes data to a file synchronously.

    ```javascript
    fs.writeFileSync("example.txt", "Hello, Synchronous World!");
    console.log("File written successfully!");
    ```

    - fs.appendFile(): Appends data to a file asynchronously. If the file does not exist, it creates one.

    ```javascript
    fs.appendFile("example.txt", "Appended text.", (err) => {
      if (err) throw err;
      console.log("Data appended to file!");
    });
    ```

    - fs.unlink(): Deletes a file asynchronously.

    ```javascript
    fs.unlink("example.txt", (err) => {
      if (err) throw err;
      console.log("File deleted!");
    });
    ```

    - fs.unlinkSync(): Deletes a file synchronously.

    ```javascript
    fs.unlinkSync("example.txt");
    console.log("File deleted!");
    ```

    - fs.rename(): Renames a file or directory asynchronously.

    ```javascript
    fs.rename("oldName.txt", "newName.txt", (err) => {
      if (err) throw err;
      console.log("File renamed!");
    });
    ```

    - fs.mkdir(): Creates a new directory asynchronously.

    ```javascript
    fs.mkdir("newDir", (err) => {
      if (err) throw err;
      console.log("Directory created!");
    });
    ```

    - fs.rmdir(): Removes a directory asynchronously (only works if the directory is empty).

    ```javascript
    fs.rmdir("newDir", (err) => {
      if (err) throw err;
      console.log("Directory deleted!");
    });
    ```

    - fs.readdir(): Reads the contents of a directory asynchronously.

    ```javascript
    fs.readdir(".", (err, files) => {
      if (err) throw err;
      console.log(files); // Array of filenames in the directory
    });
    ```

    - fs.stat(): Retrieves information about a file or directory (e.g., size, creation time).

    ```javascript
    fs.stat("example.txt", (err, stats) => {
      if (err) throw err;
      console.log(stats); // File information
    });
    ```

    - fs.copyFile(): Copies a file asynchronously.

    ```javascript
    fs.copyFile("source.txt", "destination.txt", (err) => {
      if (err) throw err;
      console.log("File copied!");
    });
    ```

    - fs.watch(): Watches for changes in a file or directory, and runs a callback on change.

    ```javascript
    fs.watch("example.txt", (eventType, filename) => {
      console.log(`${filename} file changed: ${eventType}`);
    });
    ```

12. **Example: Reading and Writing to a File**

    ```javascript
    const fs = require("fs");

    // Reading a file
    fs.readFile("example.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log("File data:", data);

      // Writing to the file
      fs.writeFile("example.txt", data + " Updated content.", (err) => {
        if (err) throw err;
        console.log("File updated!");
      });
    });
    ```

13. **Use Cases of File System**

    - Reading and writing files: For storing or retrieving data from files.
    - Directory management: Creating, deleting, and reading directories.
    - Monitoring file changes: For building live-reload systems or logging changes in the file system.

## console Module

14. **What is console Module**

    - The console module is essential for debugging and logging in Node.js applications. It enables developers to print messages to the terminal, making it easier to monitor application behavior, track issues, and display runtime information.

15. **Feature of console Module**

    - Offers various methods for different types of logging and debugging needs.
    - Simple API for developers to quickly output messages and track application behavior.
    - Built-in methods to measure execution time and display performance metrics.
    - console.table() and console.dir() provide formatted and interactive data views.

16. **Benefits of console Module**

    - Simplifies debugging by allowing developers to print and inspect values at various code points.
    - Provides various logging methods to cater to different needs, from basic info to detailed stack traces.
    - Helps in monitoring performance and identifying bottlenecks through timing functions.

17. **console.count() Method**

    - It is used to count the number of times a specific label has been called.

    ```javascript
    console.count("Counter"); // Counter: 1
    console.count("Counter"); // Counter: 2
    ```

18. **console method**

    - console.log(): Prints standard messages to the console

    ```javascript
    console.log("Hello, World!"); // Prints to stdout
    ```

    - console.error(): Prints error messages to the console.

    ```javascript
    console.error("An error occurred!"); // Prints to stderr
    ```

    - console.warn(): Prints warning messages to the console.

    ```javascript
    console.warn("This is a warning!"); // Prints to stderr
    ```

    - console.info(): Alias for console.log(), often used for informational messages.

    ```javascript
    console.info("Informational message"); // Prints to stdout
    ```

    - console.assert(): Prints an error message if a given expression is false.

    ```javascript
    console.assert(5 > 10, "Condition failed!"); // Prints 'Condition failed!'
    ```

    - console.table(): Displays data as a table, useful for inspecting arrays or objects.

    ```javascript
    const data = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
    ];
    console.table(data);
    ```

    - console.count(): Logs the number of times the function is called with the same label.

    ```javascript
    console.count("Counter"); // Counter: 1
    console.count("Counter"); // Counter: 2
    ```

    - console.time() & console.timeEnd(): Starts and ends a timer to track the time taken to execute a code block.

    ```javascript
    console.time("Timer");
    // some code block
    console.timeEnd("Timer"); // Prints the elapsed time
    ```

    - console.trace(): Prints a stack trace to help debug where a function was called from.

    ```javascript
    function f1() {
      console.trace("Trace Message");
    }
    f1();
    ```

    - console.group() & console.groupEnd(): Groups related logs, providing nested log outputs.

    ```javascript
    console.group("Outer Group");
    console.log("Message 1");
    console.group("Inner Group");
    console.log("Message 2");
    console.groupEnd();
    console.groupEnd();
    ```

19. **Creating Custom Console Instances**

    ```javascript
    const fs = require("fs");
    const output = fs.createWriteStream("./stdout.log");
    const errorOutput = fs.createWriteStream("./stderr.log");

    const { Console } = require("console");
    const myConsole = new Console(output, errorOutput);

    myConsole.log("This will be written to stdout.log");
    myConsole.error("This will be written to stderr.log");
    ```

20. **Use Cases for the Console Module**

    - Debugging: Quickly output variable values, objects, and trace stack frames.
    - Performance Monitoring: Use console.time() and console.timeEnd() to monitor the execution time of code blocks.
    - Error Handling: Use console.error() to output error messages to stderr
    - Table Representation: Use console.table() to neatly display data in tabular form.

21. **Example: Time Tracking with Console**

    ```javascript
    console.time("Loop Time");
    for (let i = 0; i < 1000000; i++) {
      // Looping
    }
    console.timeEnd("Loop Time"); // Outputs: Loop Time: <time_taken>ms
    ```

22. **Example: Grouping Logs**

    ```javascript
    console.group("Start of Process");
    console.log("Step 1");
    console.group("Step 2");
    console.log("Task 2.1");
    console.groupEnd();
    console.log("Step 3");
    console.groupEnd();
    ```

## Stream Module

23. **What is Node.js Streams**

    - nodejs streams is key part of handling I/O operation. they provides read and write data continuously, allowing data processing, manipulation and transfer

    - a streaming is abstract interface for working with streaming data in nodejs

24. **Advantages of Streams over other data handling methods:**

    - Time Efficient
    - Memory Efficient

25. **Types of Streams in Node.js:**

    **1. Writable:** We can write data to these streams. e.g., fs.createWriteStream().
    **2. Readable:** We can read data from these streams. e.g., fs.createReadStream().
    **3. Duplex:** Streams that are both, Writable as well as Readable. e.g., net.socket.
    **4. Transform:** Streams that can modify or transform the data as it is written and read. e.g., zlib.createDeflate.

26. **Key Methods of the Stream Module:**

    **_1. Readable Streams:_**

    - .read(): Reads data from the stream. It can be used in conjunction with events like 'data' and 'end'.
    - .pipe(): Sends the data from the readable stream to a writable stream.
    - .on('data'): Event listener for reading data in chunks.
    - .on('end'): Event listener triggered when no more data is available to read.

    ```javascript
    const fs = require("fs");
    const readableStream = fs.createReadStream("example.txt", {
      encoding: "utf8",
    });

    readableStream.on("data", (chunk) => {
      console.log("Received chunk:", chunk);
    });

    readableStream.on("end", () => {
      console.log("No more data.");
    });
    ```

    **_2. Writable Streams:_**

    - .write(): Writes data to the stream.
    - end(): Signals that no more data will be written to the stream.
    - .on('finish'): Event listener triggered when all data is flushed to the underlying system.

    ```javascript
    const fs = require("fs");
    const writableStream = fs.createWriteStream("output.txt");

    writableStream.write("Hello, World!");
    writableStream.end("End of File");

    writableStream.on("finish", () => {
      console.log("All data written successfully.");
    });
    ```

    **_3. Duplex Streams:_**

    - Duplex streams are both readable and writable.

    ```javascript
    const { Duplex } = require("stream");
    const duplexStream = new Duplex({
      read(size) {
        this.push("Read data");
        this.push(null); // End the stream
      },
      write(chunk, encoding, callback) {
        console.log(`Written: ${chunk.toString()}`);
        callback();
      },
    });

    duplexStream.on("data", (chunk) => {
      console.log(`Received: ${chunk.toString()}`);
    });

    duplexStream.write("Hello, Duplex Stream");
    duplexStream.end();
    ```

    **_4. Transform Streams:_**

    - Transform streams are duplex streams that modify or transform the data as it passes through.

    ```javascript
    const { Transform } = require("stream");
    const transformStream = new Transform({
      transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
      },
    });

    process.stdin.pipe(transformStream).pipe(process.stdout);
    ```

27. **Stream Events**

    - 'data': Triggered when a chunk of data is available to be read.
    - 'end': Triggered when no more data will be provided.
    - 'error': Triggered when an error occurs.
    - 'finish': Triggered when all the data has been written to the stream (writable streams).
    - 'close': Triggered when the stream and underlying resource have been closed.

28. **Example: Using Streams to Copy a File**

    ```javascript
    const fs = require("fs");

    const readableStream = fs.createReadStream("input.txt");
    const writableStream = fs.createWriteStream("output.txt");

    readableStream.pipe(writableStream);

    writableStream.on("finish", () => {
      console.log("File copied successfully");
    });
    ```

29. **Use Cases of Streams:**

    - Reading large files: Reading files in chunks to avoid loading the entire file into memory.
    - Network communication: Handling requests and responses in HTTP servers.
    - Data transformation: Transforming data on the fly (e.g., compressing or decompressing files).
    - File uploads/downloads: Efficiently handling file uploads and downloads without overloading memory.

30. **Stream Methods Summary:**

    - .read(): Reads data from a readable stream.
    - .write(): Writes data to a writable stream.
    - .pipe(): Pipes the output of one stream into another.
    - .end(): Marks the end of writing in a writable stream.
    - .on('event'): Listens for stream events like 'data', 'end', 'error', 'finish', etc.

## Path Module

31. **What is path Module**

    - The Path Module is widely used in file and directory operations and ensures cross-platform compatibility by handling differences in file path structures.

32. **Key Methods of the path Module**

    **_1. path.basename()_**

    - Returns the last part of a path (the file or directory name).

    ```javascript
    const path = require("path");
    const filePath = "/home/user/documents/file.txt";

    const baseName = path.basename(filePath);
    console.log(baseName); // Output: 'file.txt'
    ```

    - Optionally, you can pass an extension to exclude:

    ```javascript
    const baseName = path.basename(filePath, ".txt");
    console.log(baseName); // Output: 'file'
    ```

    **_2. path.dirname()_**

    - Returns the directory name of a path (the portion before the file or directory).

    ```javascript
    const dirName = path.dirname("/home/user/documents/file.txt");
    console.log(dirName); // Output: '/home/user/documents'
    ```

    **_3. path.extname()_**

    - Returns the file extension of a path.

    ```javascript
    const extName = path.extname("/home/user/documents/file.txt");
    console.log(extName); // Output: '.txt'
    ```

    **_4. path.join()_**

    - Joins multiple path segments into a single path. It automatically inserts the correct path separators (forward slash / or backslash \).

    ```javascript
    const fullPath = path.join("/home", "user", "documents", "file.txt");
    console.log(fullPath); // Output: '/home/user/documents/file.txt'
    ```

    - It also handles double slashes:

    ```javascript
    const pathWithSlashes = path.join(
      "/home/",
      "/user/",
      "documents//file.txt"
    );
    console.log(pathWithSlashes); // Output: '/home/user/documents/file.txt'
    ```

    **_5. path.resolve()_**

    - Resolves a sequence of path segments into an absolute path. It treats the first path as an absolute base path and resolves other segments relative to it.

    ```javascript
    const absolutePath = path.resolve("documents", "file.txt");
    console.log(absolutePath); // Output: '/current/directory/documents/file.txt'
    ```

    - If a path is already absolute, it returns that path directly.

    ```javascript
    const abs = path.resolve("/home/user", "file.txt");
    console.log(abs); // Output: '/home/user/file.txt'
    ```

    **_6. path.normalize()_**

    - Normalizes a path, resolving .. and . segments, and fixing unnecessary slashes.

    ```javascript
    const normalizedPath = path.normalize("/home/user/../documents/./file.txt");
    console.log(normalizedPath); // Output: '/home/documents/file.txt'
    ```

    **_7. path.isAbsolute()_**

    - Checks whether a given path is absolute or not.

    ```javascript
    const isAbs = path.isAbsolute("/home/user/documents");
    console.log(isAbs); // Output: true

    const isNotAbs = path.isAbsolute("documents/file.txt");
    console.log(isNotAbs); // Output: false
    ```

    **_8. path.relative()_**

    - Returns the relative path from one directory to another.

    ```javascript
    const from = "/home/user/documents";
    const to = "/home/user/photos";

    const relativePath = path.relative(from, to);
    console.log(relativePath); // Output: '../photos'
    ```

    **_9. path.parse()_**

    - Returns an object containing important properties of a path, such as root, dir, base, ext, and name.

    ```javascript
    const parsedPath = path.parse("/home/user/documents/file.txt");
    console.log(parsedPath);
    /*
    Output:
    {
    root: '/',
    dir: '/home/user/documents',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
    }
    */
    ```

    **_10. path.format()_**

    - Accepts an object from path.parse() and constructs a path string from it.

    ```javascript
    const pathObj = {
      dir: "/home/user/documents",
      base: "file.txt",
    };

    const formattedPath = path.format(pathObj);
    console.log(formattedPath); // Output: '/home/user/documents/file.txt'
    ```

33. **Example of Path Module**

    ```javascript
    const path = require("path");

    // Example file path
    const filePath = "/home/user/documents/file.txt";

    // Get the file name
    console.log(path.basename(filePath)); // 'file.txt'

    // Get the directory name
    console.log(path.dirname(filePath)); // '/home/user/documents'

    // Get the file extension
    console.log(path.extname(filePath)); // '.txt'

    // Join paths
    const newPath = path.join("/home", "user", "photos", "image.jpg");
    console.log(newPath); // '/home/user/photos/image.jpg'

    // Get absolute path
    const absolutePath = path.resolve("file.txt");
    console.log(absolutePath); // '/current/directory/file.txt'

    // Parse a path
    const parsed = path.parse("/home/user/documents/file.txt");
    console.log(parsed);
    /*
    {
    root: '/',
    dir: '/home/user/documents',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
    }
    */
    ```

34. **Use Cases of Path Module**

    - Building cross-platform file paths (Windows vs. Linux/MacOS).
    - Handling relative and absolute paths when working with files.
    - Navigating and managing file systems in a consistent and portable manner.

## OS Module

35. **What is OS Module**

    - The os module in Node.js provides operating system-related utility methods and properties.

    - The OS Module is essential when you need to develop applications that depend on system-specific information, such as monitoring tools, resource management, or cross-platform file handling.

36. **Key Methods of the OS Module**

    - os.arch(): Returns the CPU architecture of the operating system (e.g., ‘x64’, ‘arm’).

    ```javascript
    const os = require("os");
    console.log(os.arch()); // Output: 'x64' (on a 64-bit system)
    ```

    - os.platform(): Returns the operating system platform (e.g., ‘linux’, ‘darwin’).

    ```javascript
    console.log(os.platform()); // Output: 'linux' (on a Linux system)
    ```

    - os.cpus(): Provides an array of objects describing each CPU/core installed.

    ```javascript
    console.log(os.cpus());
    /*
        Example output:
        [
        { model: 'Intel(R) Core(TM) i7', speed: 2300, times: { user: 140000, idle: 500000, ... } },
        { model: 'Intel(R) Core(TM) i7', speed: 2300, times: { user: 130000, idle: 500000, ... } },
        ...
        ]
    */
    ```

    - os.totalmem(): Returns the total amount of system memory in bytes.

    ```javascript
    const totalMemory = os.totalmem();
    console.log(totalMemory); // Output: e.g., 17179869184 (16 GB)
    ```

    - os.freemem(): Returns the amount of free system memory in bytes.

    ```javascript
    const freeMemory = os.freemem();
    console.log(freeMemory); // Output: e.g., 857315328 (approx. 800 MB)
    ```

    - os.homedir(): Returns the home directory of the current user.

    ```javascript
    const homeDir = os.homedir();
    console.log(homeDir); // Output: '/home/username' (on Linux/macOS) or 'C:\\Users\\username' (on Windows)
    ```

    - os.hostname(): Returns the hostname of the operating system.

    ```javascript
    const hostname = os.hostname();
    console.log(hostname); // Output: e.g., 'my-computer'
    ```

    - os.networkInterfaces(): Returns a list of network interfaces and their details.

    ```javascript
    const networkInterfaces = os.networkInterfaces();
    console.log(networkInterfaces);
    /*
        Example output:
        {
        lo: [
            { address: '127.0.0.1', netmask: '255.0.0.0', family: 'IPv4', mac: '00:00:00:00:00:00', ... }
        ],
        eth0: [
            { address: '192.168.0.101', netmask: '255.255.255.0', family: 'IPv4', mac: 'ab:cd:ef:12:34:56', ... }
        ]
        }
    */
    ```

    - os.uptime(): Returns the system uptime in seconds

    ```javascript
    const uptimeInSeconds = os.uptime();
    console.log(uptimeInSeconds); // Output: e.g., 3600 (1 hour)
    ```

    - os.type(): Returns the operating system name, such as 'Linux', 'Darwin' (for macOS), or 'Windows_NT' (for Windows).

    ```javascript
    const osType = os.type();
    console.log(osType); // Output: 'Linux' (on Linux system)
    ```

    - os.release(): Returns the operating system version as a string.

    ```javascript
    const osRelease = os.release();
    console.log(osRelease); // Output: '5.4.0-74-generic' (on Linux system)
    ```

    - os.tmpdir(): Returns the default directory for temporary files.

    ```javascript
    const tempDir = os.tmpdir();
    console.log(tempDir); // Output: '/tmp' (on Linux/macOS) or 'C:\\Users\\username\\AppData\\Local\\Temp' (on Windows)
    ```

    - os.endianness(): Returns the endianness of the CPU as either 'BE' (big-endian) or 'LE' (little-endian).

    ```javascript
    const endian = os.endianness();
    console.log(endian); // Output: 'LE' (on most modern systems)
    ```

    - os.loadavg(): Returns an array containing the load averages for the 1, 5, and 15-minute periods. This is only available on Unix-like systems (Linux, macOS).

    ```javascript
    const loadAvg = os.loadavg();
    console.log(loadAvg); // Output: [0.15, 0.10, 0.05] (example load averages)
    ```

    - os.constants: Provides system-specific constants such as error codes, signal names, and other operating system constants.

    ```javascript
    console.log(os.constants.signals); // Example output: { SIGHUP: 1, SIGINT: 2, ... }
    ```

    - os.userInfo(): Returns information about the current user, such as the username, homedir, shell, and user ID.

    ```javascript
    const userInfo = os.userInfo();
    console.log(userInfo);
    /*
    Output example:
    {
    username: 'john',
    uid: 1000,
    gid: 1000,
    shell: '/bin/bash',
    homedir: '/home/john'
    }
    */
    ```

37. **Example of OS Module**

    ```javascript
    const os = require("os");

    // Get CPU architecture
    console.log("CPU Architecture:", os.arch()); // 'x64'

    // Get total memory
    console.log("Total Memory (bytes):", os.totalmem());

    // Get free memory
    console.log("Free Memory (bytes):", os.freemem());

    // Get hostname
    console.log("Hostname:", os.hostname());

    // Get platform
    console.log("Platform:", os.platform()); // 'linux'

    // Get user home directory
    console.log("Home Directory:", os.homedir());

    // Get system uptime
    console.log("Uptime (seconds):", os.uptime());

    // Get network interfaces
    console.log("Network Interfaces:", os.networkInterfaces());
    ```

38. **Use Cases of OS Module**

    - Retrieving system information like CPU, memory, and uptime.
    - Getting details about the current user or the system environment.
    - Monitoring system performance (load averages, memory usage).
    - Handling temporary files using the OS's temp directory.

## Crypto Module

39. **What is Crypto Module**

    - The Crypto Module is essential for securing data, enabling encryption, and verifying data integrity and authenticity in Node.js applications.

40. **Key Methods of the crypto Module**

    - crypto.createHash(): Creates a hash object using a specified algorithm, such as 'sha256', 'sha512', 'md5', etc. Hashing is useful for verifying data integrity.

    ```javascript
    const crypto = require("crypto");
    const hash = crypto.createHash("sha256");
    hash.update("some data to hash");
    const digest = hash.digest("hex");
    console.log(digest); // Output: hashed value in hexadecimal
    ```

    - crypto.createHmac(): Creates an HMAC (Hashed Message Authentication Code) using a specified algorithm and secret key. HMACs are used to ensure both the integrity and authenticity of a message.

    ```javascript
    const hmac = crypto.createHmac("sha256", "a secret key");
    hmac.update("some data to hash");
    const digest = hmac.digest("hex");
    console.log(digest); // Output: HMAC value in hexadecimal
    ```

    - crypto.createCipheriv(): Creates a cipher object using a specified algorithm, key, and initialization vector (IV) for encryption. Common algorithms include 'aes-256-cbc', 'aes-192-cbc', etc.

    ```javascript
    const algorithm = "aes-256-cbc";
    const key = crypto.randomBytes(32); // Encryption key
    const iv = crypto.randomBytes(16); // Initialization vector

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update("some data to encrypt", "utf8", "hex");
    encrypted += cipher.final("hex");
    console.log(encrypted); // Output: encrypted data in hexadecimal
    ```

    - crypto.createDecipheriv(): Creates a decipher object for decryption using the same algorithm, key, and IV that were used for encryption.

    ```javascript
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    console.log(decrypted); // Output: 'some data to encrypt'
    ```

    - crypto.randomBytes(): Generates cryptographically secure pseudo-random bytes. This is often used for generating tokens, IVs, or encryption keys.

    ```javascript
    crypto.randomBytes(16, (err, buffer) => {
      if (err) throw err;
      console.log(buffer.toString("hex")); // Output: 16 random bytes in hexadecimal
    });
    ```

    - crypto.pbkdf2(): Performs key derivation using the Password-Based Key Derivation Function 2 (PBKDF2). It is commonly used to securely hash passwords.

    ```javascript
    const password = "secretPassword";
    const salt = crypto.randomBytes(16);

    crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, derivedKey) => {
      if (err) throw err;
      console.log(derivedKey.toString("hex")); // Output: derived key in hexadecimal
    });
    ```

    - crypto.createSign(): Creates a signature object using a specified algorithm, such as 'RSA-SHA256'. It is used to sign data (often with a private key) to ensure authenticity.

    ```javascript
    const sign = crypto.createSign("SHA256");
    sign.update("some data to sign");
    const privateKey = "your-private-key";
    const signature = sign.sign(privateKey, "hex");
    console.log(signature); // Output: digital signature in hexadecimal
    ```

    - crypto.createVerify(): Verifies the signature of data. It ensures that the data has not been tampered with and that it was signed by the holder of the corresponding private key.

    ```javascript
    const verify = crypto.createVerify("SHA256");
    verify.update("some data to sign");
    const publicKey = "your-public-key";
    const isValid = verify.verify(publicKey, signature, "hex");
    console.log(isValid); // Output: true or false
    ```

    - crypto.createDiffieHellman(): Implements the Diffie-Hellman key exchange protocol, which allows two parties to securely share a secret key over an insecure communication channel.

    ```javascript
    const dh = crypto.createDiffieHellman(2048);
    const keys = dh.generateKeys();
    const prime = dh.getPrime("hex");
    const publicKey = dh.getPublicKey("hex");
    console.log({ prime, publicKey }); // Output: Diffie-Hellman parameters
    ```

    - crypto.createECDH(): Creates an Elliptic Curve Diffie-Hellman (ECDH) key exchange object. ECDH is a more modern key exchange mechanism that uses elliptic curves for generating shared secrets.

    ```javascript
    const ecdh = crypto.createECDH("secp256k1");
    const publicKey = ecdh.generateKeys();
    console.log(publicKey.toString("hex")); // Output: ECDH public key in hexadecimal
    ```

    - crypto.publicEncrypt(): Encrypts data using the public key provided, commonly used in asymmetric encryption schemes like RSA.

    ```javascript
    const publicKey = "your-public-key";
    const encrypted = crypto.publicEncrypt(
      publicKey,
      Buffer.from("some data to encrypt")
    );
    console.log(encrypted.toString("hex")); // Output: encrypted data in hexadecimal
    ```

    - crypto.privateDecrypt(): Decrypts data that was encrypted using the corresponding public key. This is part of asymmetric encryption.

    ```javascript
    const privateKey = "your-private-key";
    const decrypted = crypto.privateDecrypt(privateKey, encryptedData);
    console.log(decrypted.toString("utf8")); // Output: decrypted original data
    ```

    - crypto.scrypt(): An alternative to PBKDF2 for deriving a cryptographic key from a password. It is considered to be more resistant to brute-force attacks.

    ```javascript
    crypto.scrypt("password", "salt", 64, (err, derivedKey) => {
      if (err) throw err;
      console.log(derivedKey.toString("hex")); // Output: derived key in hexadecimal
    });
    ```

    - crypto.createHash().update(): Updates the hash content with additional data to be hashed. It can be called multiple times before calling .digest().

    ```javascript
    const hash = crypto.createHash("sha256");
    hash.update("first part of the data");
    hash.update("second part of the data");
    const result = hash.digest("hex");
    console.log(result); // Output: final hash in hexadecimal
    ```

41. **Example Usage of Crypto Module**

    ```javascript
    const crypto = require("crypto");

    // Hashing data using SHA-256
    const hash = crypto.createHash("sha256");
    hash.update("some data to hash");
    console.log("Hash:", hash.digest("hex"));

    // Encrypting and decrypting data using AES-256-CBC
    const algorithm = "aes-256-cbc";
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update("some secret data", "utf8", "hex");
    encrypted += cipher.final("hex");
    console.log("Encrypted:", encrypted);

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    console.log("Decrypted:", decrypted);

    // Generating random bytes
    crypto.randomBytes(16, (err, buffer) => {
      if (err) throw err;
      console.log("Random bytes:", buffer.toString("hex"));
    });
    ```

42. **use case of Crypto Module**

    - Data Hashing: For integrity checks, password storage, etc.
    - Encryption & Decryption: Secure sensitive data.
    - Digital Signatures: Verify data authenticity.
    - Key Derivation: Securely hash passwords.
    - Random Token Generation: For session tokens or unique identifiers.

## HTTP Modules

43. **What is HTTP**

    - The HTTP module in Node.js provides utilities for creating HTTP servers and clients. It’s a fundamental part of Node.js, enabling the handling of HTTP requests and responses.

    - The HTTP module in Node.js is fundamental for building web servers and managing HTTP interactions, whether creating simple sites or complex APIs.

44. **HTTP vs HTTPS**

    - HTTP: Hyper Text Transfer protocol
    - A protocol transfering data which is understood by browser and server

    - HTTPS: Hyper Text Transfer Protocol
    - HTTP + Data Encryption (during transmission)

45. **Key Methods of the http Module**

    - http.createServer(): This method creates an HTTP server instance that can listen to requests and send responses. It takes a callback function that is triggered every time the server receives a request.

    ```javascript
    const http = require("http");

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World");
    });

    server.listen(3000, () => {
      console.log("Server running at http://localhost:3000/");
    });
    ```

    - http.request(): This method makes an outgoing HTTP request to a remote server. It takes an options object to specify the request configuration and a callback to handle the response.

    ```javascript
    const http = require("http");
    const options = {
      hostname: "www.example.com",
      port: 80,
      path: "/",
      method: "GET",
    };

    const req = http.request(options, (res) => {
      console.log(`Status Code: ${res.statusCode}`);
      res.on("data", (chunk) => {
        console.log(`Body: ${chunk}`);
      });
    });

    req.on("error", (error) => {
      console.error(`Problem with request: ${error.message}`);
    });

    req.end();
    ```

    - http.get():A convenience method that performs a GET request. It is a simplified version of http.request() for making HTTP GET requests.

    ```javascript
    http
      .get("http://www.example.com", (res) => {
        console.log(`Status Code: ${res.statusCode}`);
        res.on("data", (chunk) => {
          console.log(`Body: ${chunk}`);
        });
      })
      .on("error", (err) => {
        console.error(`Error: ${err.message}`);
      });
    ```

    - http.Server.listen(): This method starts the HTTP server and makes it listen for incoming connections on a specified port and hostname.

    ```javascript
    const http = require("http");

    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World");
    });

    // Listen on port 3000
    server.listen(3000, "localhost", () => {
      console.log("Server listening on port 3000");
    });
    ```

    - http.Server.close(): Stops the server from accepting new connections. The existing connections remain until they are completed.

    ```javascript
    const server = http.createServer((req, res) => {
      res.end("Server running");
    });

    server.listen(3000, () => {
      console.log("Server running on port 3000");
    });

    // After 10 seconds, close the server
    setTimeout(() => {
      server.close(() => {
        console.log("Server closed");
      });
    }, 10000);
    ```

    - http.Server.setTimeout(): Sets the timeout value for the HTTP server. The timeout is the number of milliseconds of inactivity before a request is aborted.

    ```javascript
    const server = http.createServer((req, res) => {
      res.end("Hello World");
    });

    server.setTimeout(5000); // Set timeout to 5 seconds
    server.listen(3000);
    ```

    - http.IncomingMessage: This class represents an incoming HTTP request in Node.js. It contains details such as the request headers, method, and URL. It is an instance of http.ServerRequest.

    ```javascript
    const server = http.createServer((req, res) => {
      console.log(req.method); // Request method (GET, POST, etc.)
      console.log(req.url); // Requested URL
      console.log(req.headers); // Request headers
      res.end("Request received");
    });

    server.listen(3000);
    ```

    - http.ServerResponse: This class represents the HTTP response that the server sends to the client. It allows setting headers, status codes, and the response body.

      - res.statusCode: Sets the status code for the response (e.g., 200, 404).
      - res.setHeader(): Sets a specific header for the response.
      - res.write(): Writes data to the body of the response.
      - res.end(): Signals the end of the response.

    ```javascript
    const server = http.createServer((req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.write("Hello ");
      res.end("World");
    });

    server.listen(3000);
    ```

    - http.Agent: The http.Agent class manages connection persistence for HTTP requests. It is used to pool sockets for better performance when making multiple requests to the same server.

    ```javascript
    const http = require("http");

    const agent = new http.Agent({ keepAlive: true });

    const options = {
      hostname: "www.example.com",
      port: 80,
      path: "/",
      method: "GET",
      agent: agent,
    };

    const req = http.request(options, (res) => {
      console.log(`Status Code: ${res.statusCode}`);
    });

    req.end();
    ```

46. **Example of Building a Basic HTTP Server**

    ```javascript
    const http = require("http");
    // Create an HTTP server
    const server = http.createServer((req, res) => {
      if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Home Page</h1>");
      } else if (req.url === "/about" && req.method === "GET") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>About Page</h1>");
      } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Not Found</h1>");
      }
    });

    // Server listens on port 3000
    server.listen(3000, "localhost", () => {
      console.log("Server running at http://localhost:3000/");
    });
    ```

47. **Use Cases of HTTP Modules**

    - Creating web servers: Handle incoming HTTP requests and send responses.
    - Making HTTP requests: Fetch external data from APIs or other services.
    - Handling REST APIs: Build RESTful services that process GET, POST, PUT, DELETE requests.

## HTTP2 Modules

47. **What is HTTP/2**

    - The Node.js HTTP/2 Module is a powerful way to build high-performance and low-latency applications, leveraging the advanced features of the HTTP/2 protocol.

48. **Key Methods of the http2 Module**

    - http2.createServer(): Creates a new HTTP/2 server instance. It takes a request handler callback function similar to the HTTP/1.x http.createServer() method.

    ```javascript
    const http2 = require("http2");

    const server = http2.createServer((req, res) => {
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello over HTTP/2");
    });

    server.listen(3000, () => {
      console.log("HTTP/2 server running at http://localhost:3000/");
    });
    ```

    - http2.createSecureServer(): Creates an HTTP/2 server that supports TLS/SSL (i.e., an HTTPS server). This is equivalent to creating an https server with HTTP/2 support.

    ```javascript
    const http2 = require("http2");
    const fs = require("fs");

    const server = http2.createSecureServer({
      key: fs.readFileSync("server-key.pem"),
      cert: fs.readFileSync("server-cert.pem"),
    });

    server.on("stream", (stream, headers) => {
      stream.respond({
        "content-type": "text/html",
        ":status": 200,
      });
      stream.end("<h1>Hello Secure HTTP/2</h1>");
    });

    server.listen(3000, () => {
      console.log("Secure HTTP/2 server running at https://localhost:3000/");
    });
    ```

    - http2.connect(): This method allows you to create an HTTP/2 client connection to a remote server. It establishes a session over an HTTP/2 connection.

    ```javascript
    const http2 = require("http2");

    const client = http2.connect("http://localhost:3000");

    const req = client.request({ ":path": "/" });

    req.on("response", (headers, flags) => {
      for (const name in headers) {
        console.log(`${name}: ${headers[name]}`);
      }
    });

    req.setEncoding("utf8");
    req.on("data", (chunk) => {
      console.log(chunk);
    });

    req.on("end", () => {
      client.close();
    });

    req.end();
    ```

    - http2.Http2Server: An instance of an HTTP/2 server created using http2.createServer() or http2.createSecureServer(). The server handles stream events, which represent individual HTTP/2 requests.

    ```javascript
    const http2 = require("http2");

    const server = http2.createServer();

    server.on("stream", (stream, headers) => {
      stream.respond({
        "content-type": "text/html",
        ":status": 200,
      });
      stream.end("<h1>Hello from HTTP/2 Server</h1>");
    });

    server.listen(3000);
    ```

    - http2.Http2Stream: Represents an HTTP/2 stream, which is analogous to an HTTP/1.x request/response pair. Each stream is a bidirectional channel over which request and response data flows. Streams are created by both clients and servers.

      - stream.respond(): Sends headers and status code for the response.
      - stream.end(): Signals the end of the stream, similar to res.end() in HTTP/1.x.

    ```javascript
    server.on("stream", (stream, headers) => {
      stream.respond({ ":status": 200 });
      stream.end("This is the response body");
    });
    ```

    - http2.constants: This object contains constants that are used internally by HTTP/2, such as error codes, stream states, and frame types.

    ```javascript
    const http2 = require("http2");
    console.log(http2.constants.NGHTTP2_NO_ERROR); // Output: 0
    ```

    - http2.ServerHttp2Stream: This is a specialized class representing streams on an HTTP/2 server. It allows you to work with each incoming stream on the server.

    ```javascript
    server.on("stream", (stream) => {
      console.log("New stream opened");
      stream.respond({ ":status": 200 });
      stream.end("Stream response");
    });
    ```

    - stream.respond(): This method is used to send the headers and status code for an HTTP/2 response.

    ```javascript
    server.on("stream", (stream) => {
      stream.respond({
        ":status": 200,
        "content-type": "text/plain",
      });
      stream.end("Hello, world!");
    });
    ```

    - stream.pushStream(): HTTP/2 allows for server push, meaning the server can initiate responses to the client without the client requesting them. The pushStream() method allows the server to send additional resources to the client preemptively.

    ```javascript
    server.on("stream", (stream) => {
      stream.pushStream({ ":path": "/styles.css" }, (err, pushStream) => {
        if (err) throw err;
        pushStream.respond({ ":status": 200 });
        pushStream.end("body { background: lightblue; }");
      });

      stream.respond({ ":status": 200 });
      stream.end('<link rel="stylesheet" href="/styles.css">');
    });
    ```

    - stream.end(): Closes the stream and sends any remaining data to the client, similar to res.end() in HTTP/1.x.

    ```javascript
    stream.end("This is the final response body");
    ```

    - stream.setTimeout(): Sets a timeout on the stream. If the timeout is reached, the stream is closed.

    ```javascript
    stream.setTimeout(5000); // Set timeout to 5 seconds
    ```

    - stream.on(): Used to handle events related to the stream, such as data, error, and end.

    ```javascript
    stream.on("data", (chunk) => {
      console.log("Received data:", chunk);
    });

    stream.on("end", () => {
      console.log("Stream closed");
    });
    ```

49. **Creating an HTTP/2 Server with Server Push**

    ```javascript
    const http2 = require("http2");
    const fs = require("fs");

    const server = http2.createSecureServer({
      key: fs.readFileSync("server-key.pem"),
      cert: fs.readFileSync("server-cert.pem"),
    });

    server.on("stream", (stream, headers) => {
      // Push an additional resource
      stream.pushStream({ ":path": "/style.css" }, (err, pushStream) => {
        if (err) throw err;
        pushStream.respond({
          "content-type": "text/css",
          ":status": 200,
        });
        pushStream.end("body { color: blue; }");
      });

      // Respond with the main HTML document
      stream.respond({
        "content-type": "text/html",
        ":status": 200,
      });
      stream.end(
        '<h1>Hello HTTP/2 with Server Push</h1><link rel="stylesheet" href="/style.css">'
      );
    });

    server.listen(3000, () => {
      console.log("HTTP/2 server running at https://localhost:3000/");
    });
    ```

50. **Features of HTTP/2**

    - Multiplexing: Multiple requests and responses can be sent over a single connection at the same time.
    - Header Compression: HTTP/2 uses HPACK compression to reduce the size of HTTP headers, leading to better performance.
    - Server Push: The server can send resources to the client before they are requested, reducing latency.
    - Binary Framing: HTTP/2 uses binary frames to transfer data, making it more efficient than the text-based HTTP/1.x.

51. **Use Cases of HTTP/2**

    - Optimized Web Performance: HTTP/2 significantly improves web page load times, making it ideal for websites with multiple assets.
    - Building Modern APIs: HTTP/2 provides faster communication between clients and servers for APIs.
    - Real-time Applications: Multiplexing and server push allow real-time data to be sent more efficiently.

## Process Modules

52. **What is Process Module**

    - The process module is essential for managing the execution context of Node.js applications, providing crucial information and control mechanisms for developers.

53. **Key Features and Properties of Process Module**

    - process.argv: An array containing the command-line arguments passed when starting the Node.js process, allowing you to access input parameters.

    ```javascript
    console.log(process.argv);
    ```

    - process.env: An object containing the user environment variables, useful for accessing configuration settings and sensitive information like API keys.

    ```javascript
    console.log(process.env.NODE_ENV);
    ```

    - process.exit([code]): Terminates the process with an optional exit code (0 for success, non-zero for failure).

    ```javascript
    process.exit(1); // Exit with failure code
    ```

    - process.pid: The process ID of the current Node.js process, useful for process management and monitoring.

    ```javascript
    console.log(process.pid);
    ```

    - process.cwd(): Returns the current working directory of the Node.js process.

    ```javascript
    console.log(process.cwd());
    ```

    - process.uptime(): Returns the number of seconds the process has been running, useful for monitoring performance and uptime.

    ```javascript
    console.log(process.uptime());
    ```

    - process.memoryUsage(): Returns an object detailing the memory usage of the Node.js process, helping to monitor and optimize memory consumption.

    ```javascript
    console.log(process.memoryUsage());
    ```

    - process.on(event, listener): Allows you to register event listeners for various process events, such as exit, uncaughtException, and SIGINT, enabling graceful shutdowns and error handling.

    ```javascript
    process.on("exit", (code) => {
      console.log(`Process exited with code: ${code}`);
    });
    ```

    - Here’s an example demonstrating how to use the process module:

    ```javascript
    const path = require("path");

    // Log the process ID and current working directory
    console.log(`Process ID: ${process.pid}`);
    console.log(`Current Directory: ${process.cwd()}`);

    // Access command-line arguments as array
    console.log("Command-line arguments:", process.argv);

    // Handle exit event
    process.on("exit", (code) => {
      console.log(`Exiting with code: ${code}`);
    });

    // Simulate some processing
    setTimeout(() => {
      console.log("Doing some work...");
      process.exit(0); // Exit with success
    }, 2000);
    ```

## cluster modules

54. **What is cluster modules**

    - The cluster module enable you to manage worker processes efficiently, handle events, communicate between processes, and improve the performance of Node.js applications on multi-core systems.

55. **Key Features of cluster modules**

    - Load Balancing: The cluster module helps distribute incoming connections among the child processes, balancing the workload across multiple CPU cores.

    - Process Management: Each worker process runs independently and can handle requests concurrently. If a worker crashes, the master process can respawn it, enhancing application resilience.

    - Shared Server: All worker processes can listen to the same server port, allowing them to accept incoming requests without requiring additional load balancing configurations.

    - Inter-Process Communication (IPC): The master and worker processes can communicate using a built-in messaging system, enabling them to share data and synchronize tasks.

56. **Basic Usage of cluster**

    - Here’s a simple example of how to use the cluster module

    ```javascript
    const cluster = require("cluster");
    const http = require("http");
    const numCPUs = require("os").cpus().length; // Get the number of CPU cores

    if (cluster.isMaster) {
      // Fork workers for each CPU core
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
      });
    } else {
      // Workers can share the TCP connection
      http
        .createServer((req, res) => {
          res.writeHead(200);
          res.end("Hello from worker " + process.pid);
        })
        .listen(8000);
    }
    ```

    **Explanation**

    - Master Process: The main process checks if it's the master using cluster.isMaster. If true, it forks worker processes equal to the number of CPU cores available.

    - Worker Processes: Each worker handles incoming requests. In this example, they create an HTTP server that responds with a message indicating which worker is handling the request.

    - Process Exit Handling: The master listens for the exit event to log when a worker dies, allowing you to monitor the health of the cluster.

57. **Advantages of cluster modules**

    - Increased Performance
    - Resilience
    - Scalability

58. **Explain some of the cluster methods in Node.js**

    **cluster.isMaster**

    - Description: A boolean property that indicates whether the current process is the master process (true) or a worker process (false).

    - Usage: Used to determine the role of the current process in the cluster.

    ```javascript
    if (cluster.isMaster) {
      // Code for the master process
    } else {
      // Code for worker processes
    }
    ```

    **cluster.isWorker**

    - Description: A boolean property that indicates whether the current process is a worker process (true) or the master process (false).

    - Usage: Useful for checking if the current process should behave like a worker.

    ```javascript
    if (cluster.isWorker) {
      console.log(`I am worker ${process.pid}`);
    }
    ```

    **cluster.fork([env])**

    - Description: Creates a new worker process and returns the worker instance. You can optionally pass an object as an argument to set environment variables for the worker.

    - Usage: Used to create worker processes.

    ```javascript
    const worker = cluster.fork();
    ```

    **cluster.workers**

    - Description: An object containing all the active worker instances, indexed by their IDs. This allows you to interact with each worker.

    - Usage: Useful for managing workers directly.

    ```javascript
    for (const id in cluster.workers) {
      console.log(`Worker ${id} is ${cluster.workers[id].process.pid}`);
    }
    ```

    **cluster.on(event, listener)**

    - Description: Allows you to listen for various events related to the cluster, such as exit, listening, and online.

    - Usage: Used for monitoring worker events and handling them accordingly.

    ```javascript
    cluster.on("exit", (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died with code ${code}`);
    });
    ```

    **worker.send(message[, sendHandle])**

    - Description: Sends a message from the master process to the specified worker, or from one worker to another.

    - Usage: Enables inter-process communication (IPC) between the master and worker processes.

    ```javascript
    worker.send({ hello: "world" });
    ```

    **worker.on(event, listener)**

    - Description: Allows you to listen for events emitted by a worker, such as message (when a message is received) and exit (when a worker exits).

    - Usage: Used to handle messages and events from workers.

    ```javascript
    worker.on("message", (msg) => {
      console.log(`Message from worker: ${msg}`);
    });
    ```

    **cluster.disconnect([callback])**

    - Description: Disconnects all workers, allowing them to finish processing requests before exiting. An optional callback can be provided to execute after all workers have disconnected.

    - Usage: Used to gracefully shut down the cluster.

    ```javascript
    cluster.disconnect(() => {
      console.log("All workers have been disconnected");
    });
    ```

59. **Example Usage of cluster modules**

    ```javascript
    const cluster = require("cluster");
    const http = require("http");
    const numCPUs = require("os").cpus().length;

    if (cluster.isMaster) {
      console.log(`Master ${process.pid} is running`);

      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died with code: ${code}`);
      });
    } else {
      http
        .createServer((req, res) => {
          res.writeHead(200);
          res.end(`Hello from worker ${process.pid}`);
        })
        .listen(8000);
    }
    ```

## URL Module

60. **What is URL module in nodejs**

    - URL is Uniform Resource Locator.

    - The URL module in Node.js is essential for working with URLs, providing a clear and structured way to parse, manipulate, and format URLs, as well as to manage query parameters efficiently. It is particularly useful for web applications, APIs, and any functionality involving URL handling.

61. **Key Features of URL**

    - Parsing URLs: The URL module can parse URLs into their respective components, making it easy to access and manipulate parts of a URL.

    - Building URLs: It allows you to create and format URLs from components, ensuring they are properly encoded.

    - URL Resolution: The module can resolve relative URLs against a base URL.

62. **Method of URL**

    **URL Class**

    - Description: Represents a URL and provides methods to manipulate it.

    - Constructor: new URL(url[, base]) creates a new URL object. The base parameter is optional and is used when the URL is relative.

    ```javascript
    const { URL } = require("url");
    const myURL = new URL("https://example.com/path?name=John&age=30");
    console.log(myURL.hostname); // Output: example.com
    console.log(myURL.pathname); // Output: /path
    console.log(myURL.search); // Output: ?name=John&age=30
    ```

    **URL Properties**

    - href: The full URL as a string
    - protocol: The protocol of the URL (e.g., http:, https:).
    - host: The host (hostname and port) of the URL.
    - hostname: The hostname of the URL.
    - port: The port number of the URL, if specified.
    - pathname: The path of the URL.
    - search: The query string of the URL (includes the ?).
    - searchParams: An instance of the URLSearchParams class for working with query parameters.

    ```javascript
    console.log(myURL.href); // Output: https://example.com/path?name=John&age=30
    console.log(myURL.protocol); // Output: https:
    console.log(myURL.host); // Output: example.com
    console.log(myURL.searchParams); // Output: URLSearchParams { 'name' => 'John', 'age' => '30' }
    ```

    **URLSearchParams Class**

    - Description: Used to work with the query string of a URL, allowing you to get, set, and delete query parameters easily.

    - Constructor: new URLSearchParams(queryString) creates a new instance from a query string.

    ```javascript
    const params = new URLSearchParams(myURL.search);
    console.log(params.get("name")); // Output: John
    params.append("city", "New York");
    console.log(params.toString()); // Output: name=John&age=30&city=New+York
    ```

    **URL.format(urlObject)**

    - Description: Converts a URL object back into a URL string.

    ```javascript
    const formattedURL = URL.format(myURL);
    console.log(formattedURL); // Output: https://example.com/path?name=John&age=30
    ```

    **URL.resolve(from, to) (deprecated)**

    - Description: Resolves a target URL relative to a base URL.

    ```javascript
    const base = "https://example.com/path/";
    const relative = "subpath";
    const resolvedURL = URL.resolve(base, relative);
    console.log(resolvedURL); // Output: https://example.com/path/subpath
    ```

63. **Example of URL**

    ```javascript
    const { URL, URLSearchParams } = require("url");

    // Parse a URL
    const myURL = new URL("https://example.com/path?name=John&age=30");

    // Access URL components
    console.log(myURL.hostname); // Output: example.com
    console.log(myURL.searchParams.get("name")); // Output: John

    // Modify query parameters
    myURL.searchParams.append("city", "New York");
    console.log(myURL.search); // Output: ?name=John&age=30&city=New+York

    // Format URL back to string
    console.log(myURL.href); // Output: https://example.com/path?name=John&age=30&city=New+York
    ```

## Timer Module

63. **What is Timer**

    - The Timer Module in Node.js provides functions to execute code after a specified delay or repeatedly at defined intervals. It utilizes the underlying event loop to manage timers, allowing non-blocking asynchronous operations.

64. **Explain Method of Timer**

    **setTimeout(callback, delay, [...args])**

    - Description: Executes a specified callback function after a specified delay (in milliseconds).

    - Parameters:

      - callback: The function to execute after the delay.
      - delay: The number of milliseconds to wait before executing the callback.
      - ...args: Optional additional arguments to pass to the callback.

    - Returns: A timeout ID, which can be used with clearTimeout() to cancel the timeout.

    ```javascript
    const timeoutId = setTimeout(() => {
      console.log("Executed after 2 seconds");
    }, 2000);
    ```

    **clearTimeout(timeoutId)**

    - Description: Cancels a timeout that was previously established by setTimeout().

    - Parameters:

      - timeoutId: The ID returned by setTimeout().

    ```javascript
    clearTimeout(timeoutId); // Cancels the scheduled execution
    ```

    **setInterval(callback, delay, [...args])**

    - Description: Repeatedly executes a specified callback function at defined intervals (in milliseconds).

    - Parameters:

      - callback: The function to execute at each interval.
      - delay: The number of milliseconds between each execution of the callback.
      - ...args: Optional additional arguments to pass to the callback.

    - Returns: An interval ID, which can be used with clearInterval() to cancel the interval.

    ```javascript
    const intervalId = setInterval(() => {
      console.log("Executed every 1 second");
    }, 1000);
    ```

    **clearInterval(intervalId)**

    - Description: Cancels an interval that was previously established by setInterval().

    - intervalId: The ID returned by setInterval().

    ```javascript
    clearInterval(intervalId); // Stops the repeated execution
    ```

    **setImmediate(callback)**

    - Description: Executes a specified callback function in the next iteration of the event loop, after I/O operations.

    - Parameter:

      - callback: The function to execute.

    - Returns: An immediate ID, which can be used with clearImmediate() to cancel the immediate.

    ```javascript
    const immediateId = setImmediate(() => {
      console.log("Executed in the next iteration of the event loop");
    });
    ```

    **clearImmediate(immediateId)**

    - Description: Cancels an immediate that was previously established by setImmediate().

    - Parameters:

      - immediateId: The ID returned by setImmediate().

    ```javascript
    clearImmediate(immediateId); // Cancels the scheduled execution
    ```

65. **Example of Timer**

    ```javascript
    console.log("Start");

    const timeoutId = setTimeout(() => {
      console.log("Executed after 2 seconds");
    }, 2000);

    const intervalId = setInterval(() => {
      console.log("Executed every 1 second");
    }, 1000);

    setImmediate(() => {
      console.log("Executed in the next iteration of the event loop");
    });

    // Clear the interval after 5 seconds
    setTimeout(() => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    }, 5000);
    ```

66. **explain string decorator module in nodejs**

    - Using Prototype Augmentation:You can add methods directly to the String.prototype, allowing all string instances to access these methods.

    ```javascript
    // Add a method to capitalize the first letter of a string
    String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };

    const str = "hello";
    console.log(str.capitalize()); // Output: Hello
    ```

    - Creating Utility Functions: Instead of modifying the prototype, you can create standalone functions that take a string as an argument.

    ```javascript
    // Utility function to reverse a string
    function reverseString(str) {
      return str.split("").reverse().join("");
    }

    console.log(reverseString("hello")); // Output: olleh
    ```

    - Chaining Decorators: You can create multiple decorators to be used in a chainable way.

    ```javascript
    String.prototype.reverse = function () {
      return this.split("").reverse().join("");
    };

    String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };

    const str = "hello world";
    const result = str.reverse().capitalize();
    console.log(result); // Output: Dlrow olleH
    ```

    - Using ES6 Classes: You can also use ES6 classes to create a string decorator.

    ```javascript
    class StringDecorator {
      constructor(str) {
        this.str = str;
      }

      capitalize() {
        return this.str.charAt(0).toUpperCase() + this.str.slice(1);
      }

      reverse() {
        return this.str.split("").reverse().join("");
      }
    }

    const decoratedStr = new StringDecorator("hello");
    console.log(decoratedStr.capitalize()); // Output: Hello
    console.log(decoratedStr.reverse()); // Output: olleh
    ```

67. **What is zlib module**

    - The zlib module in Node.js is a powerful tool for handling data compression and decompression. By providing support for multiple algorithms and stream-based processing, it allows developers to optimize data handling in applications, especially when dealing with large datasets or network communications. Its seamless integration with Node.js streams makes it a valuable asset for any application that needs efficient data management.

68. **Key Features of zlib**

    - Compression: The module allows you to compress data using popular algorithms like gzip, deflate, and brotli.

    - Decompression: It also supports decompressing data that was compressed using these algorithms.

    - Stream Support: The zlib module provides both synchronous and asynchronous methods, making it suitable for use with Node.js streams, which are crucial for handling large amounts of data efficiently.

69. **Method of zlib**

    **zlib.createGzip()**

    - Description: Creates a Gzip stream for compressing data using the gzip algorithm.

    ```javascript
    const zlib = require("zlib");
    const fs = require("fs");

    const gzip = zlib.createGzip();
    const input = fs.createReadStream("input.txt");
    const output = fs.createWriteStream("input.txt.gz");

    input.pipe(gzip).pipe(output);
    ```

    **zlib.createGunzip()**

    - Description: Creates a Gunzip stream for decompressing gzip compressed data.

    ```javascript
    const gunzip = zlib.createGunzip();
    const input = fs.createReadStream("input.txt.gz");
    const output = fs.createWriteStream("output.txt");

    input.pipe(gunzip).pipe(output);
    ```

    **zlib.createDeflate()**

    - Description: Creates a Deflate stream for compressing data using the deflate algorithm.

    ```javascript
    const deflate = zlib.createDeflate();
    const input = fs.createReadStream("input.txt");
    const output = fs.createWriteStream("input.txt.deflate");

    input.pipe(deflate).pipe(output);
    ```

    **zlib.createInflate()**

    - Description: Creates an Inflate stream for decompressing data that was compressed using the deflate algorithm.

    ```javascript
    const inflate = zlib.createInflate();
    const input = fs.createReadStream("input.txt.deflate");
    const output = fs.createWriteStream("output.txt");

    input.pipe(inflate).pipe(output);
    ```

    **zlib.brotliCompress()**

    - Description: Compresses data using the Brotli algorithm.

    ```javascript
    const input = Buffer.from("Hello World");
    zlib.brotliCompress(input, (err, compressed) => {
      if (!err) {
        console.log(compressed);
      }
    });
    ```

    **zlib.brotliDecompress()**

    - Description: Decompresses Brotli compressed data.

    ```javascript
    const compressedData = /* some Brotli compressed data */;
    zlib.brotliDecompress(compressedData, (err, decompressed) => {
      if (!err) {
        console.log(decompressed.toString());
      }
    });
    ```

70. **Example of zlib**

    ```javascript
    const zlib = require("zlib");
    const fs = require("fs");

    // Compress a file
    const gzip = zlib.createGzip();
    const input = fs.createReadStream("input.txt");
    const output = fs.createWriteStream("input.txt.gz");

    input
      .pipe(gzip)
      .pipe(output)
      .on("finish", () => {
        console.log("File successfully compressed.");
      });

    // Decompress the file
    const gunzip = zlib.createGunzip();
    const inputGzip = fs.createReadStream("input.txt.gz");
    const outputDecompressed = fs.createWriteStream("output.txt");

    inputGzip
      .pipe(gunzip)
      .pipe(outputDecompressed)
      .on("finish", () => {
        console.log("File successfully decompressed.");
      });
    ```

    1.  **What is Buffer**

    - Node.js Buffer is a temporary memory storage that stores the data when it is being moved from one place to another. They provide a way to work with raw binary data streams efficiently, crucial for I/O operations, such as reading from files or receiving data over a network.

71. **create buffers in Node.js**

    - Create an uninitiated buffer: const ubuf = Buffer.alloc(5);
    - Create a buffer from array: const abuf = new Buffer([16, 32, 48, 64]);
    - Create a buffer from string: var sbuf = new Buffer("GeeksforGeeks", "ascii");
    - Writing to Buffers in Node.js: buf.write( string, offset, length, encoding )
    - Reading from Buffers: buf.toString()

72. **Reading from Buffers**

    - The buf.toString() method is used to read data from a node buffer.
    - buf.toString( encoding, start, end )

73. **Features of Buffer**

    - Direct Binary Data Handling
    - Varied Creation Methods
    - Built-in Methods
    - Encoding Support

74. **Benefits of Buffer**

    - Performance
    - Memory Efficiency
    - Flexibility
    - Compatibility

75. **Buffer.copy()**

    - simply copies all the values from the input buffer to another buffer.
    - buffer.copy( target, targetStart, sourceStart, sourceEnd)

    ```javascript
    // Node.js program to demonstrate the
    // Buffer.copy() Method

    // Creating a buffer
    let buffer2 = Buffer.from("for");

    let buffer1 = Buffer.from("GeeksandGeeks");

    buffer2.copy(buffer1, 5, 0);

    console.log(buffer1.toString());
    ```

76. **Buffer.includes() method**

    - checks whether the provided value is present or included in the buffer or not.
    - buffer.includes( value, byteOffset, encoding );

    ```javascript
    // Node program to demonstrate the
    // Buffer.includes() Method

    const buffer = Buffer.from("GeeksforGeeks: A computer science portal");

    // Started checking the value from index 15 only
    const output = buffer.includes("Geek", 15);

    console.log(output);
    ```

77. **Buffer.compare()**

    - compares the two given buffers.
    - buffer1.compare( targetBuffer, targetStart, targetEnd, sourceStart, sourceEnd )

    ```javascript
    // Node.js program to demonstrate the
    // Buffer.compare() Method

    // Creating a buffer
    const buffer1 = Buffer.from("Geek");
    const buffer2 = Buffer.from("Geek");
    const op = Buffer.compare(buffer1, buffer2);
    console.log(op); //0

    const buffer1 = Buffer.from("GFG");
    const buffer2 = Buffer.from("Python");
    const op = Buffer.compare(buffer1, buffer2);
    console.log(op); // -1
    ```

    ```javascript
    // Node.js program to demonstrate the
    // Buffer.compare() Method

    // Creating a buffer
    const buffer1 = Buffer.from("2");
    const buffer2 = Buffer.from("1");
    const buffer3 = Buffer.from("3");
    const array = [buffer1, buffer2, buffer3];

    // Before sorting
    console.log(array); //[ <Buffer 32>, <Buffer 31>, <Buffer 33> ]

    // After sorting array
    console.log(array.sort(Buffer.compare)); //[ <Buffer 31>, <Buffer 32>, <Buffer 33> ]
    ```

    ```javascript
    // Node.js program to demonstrate the
    // Buffer.compare() Method

    const buffer1 = Buffer.from("GeeksOne");
    const buffer2 = Buffer.from("GeekTwo");

    // Print: -1 as size of buffer1 starting
    // from index 4 is less than buffer2 size
    let op = buffer1.compare(buffer2, 4);

    // Print: 1 as the size of buffer2 starting
    // from index 5 is less than size of buffer1
    // starting from 0th index
    let op1 = buffer1.compare(buffer2, 0, 7, 5);

    console.log(op); //-1
    console.log(op1); //1
    ```

78. **Buffer.alloc() Method**

    - The Buffer.alloc() method is used to create a new buffer object of the specified size. This method is slower than Buffer.allocUnsafe()
    - Buffer.alloc(size, fill, encoding)

    ```javascript
    // Node.js program to demonstrate the
    // Buffer.alloc() Method

    // Allocate buffer of given size
    // using buffer.alloc() method
    var buf = Buffer.alloc(6);

    // Prints: <Buffer 00 00 00 00 00 00>
    console.log(buf); //<Buffer 00 00 00 00 00 00>
    ```

    ```javascript
    // Node.js program to demonstrate the
    // Buffer.alloc() Method

    // Allocate buffer of given size
    // using buffer.alloc() method
    var buf = Buffer.alloc(6, "a");

    // Prints <Buffer 61 61 61 61 61>
    console.log(buf);
    ```

79. **Buffer.equals() Method**

    - The Buffer.equals() method is used to compare two buffer objects and returns True of both buffer objects are the same otherwise returns False.
    - buffer.equals( buf )

    ```javascript
    // Node.js program to demonstrate the
    // Buffer.equals() Method

    // Create two bufferes
    var buf1 = Buffer.from("Hi");
    var buf2 = Buffer.from("Hi");

    // Prints true(boolean value)
    console.log(buf1.equals(buf2)); //true
    ```

    ```javascript
    // Node.js program to demonstrate the
    // Buffer.equals() Method

    // Create two bufferes
    var buf1 = Buffer.from("Hi");
    var buf2 = Buffer.from("Hello");

    // Prints false(boolean value)
    console.log(buf1.equals(buf2)); //false
    ```

80. **Buffer.subarray() Method**

    - which is used to crop a part of array i.e. create sub-array from an array.
    - Buffer.subarray( starting_index, ending_index )

81. **Buffer.readIntBE() Method**

    - The Buffer.readIntBE() method is used to read the number of bytes for a buffer at a given offset and interprets the result as a two’s complement signed value.
    - buffer.readIntBE( offset, byteLen )

82. **Buffer.write() Method**

    - The Buffer.write() method writes the specified string into a buffer, at the specified position. If buffer did not contain enough space to fit the entire string, only part of string will be written. However, partially encoded characters will not be written.
    - buffer.write( string, offset, length, encoding )

83. **Buffer.readIntLE() Method**

    - The Buffer.readIntLE() method is used to read number of bytes from a buffer at a given offset and interprets the result as a two’s complement signed value.
    - buffer.readIntLE( offset, byteLen )

84. **Buffer.readUInt8() Method**

    - The Buffer.readUInt8() method is used to read an unsigned 8 bit integer from a Buffer object.
    - buffer.readUInt8( offset )

85. **Buffer.indexOf()**

    - The Buffer.indexOf() method firstly checks for the input value, if it present in the buffer then it returns the first position (index) from where the value is starting.
    - buffer.indexOf( value, start, encoding )
