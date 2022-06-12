# CLI file manager

## Description

This file manager is able to do the following:

- Work using CLI
- Perform basic file operations (copy, move, delete, rename, etc.)
- Get information about the host machine operating system
- Perform hash calculations
- Compress and decompress files

## Technical requirements

- No external dependencies should be required
- Codebase is written in ESM modules instead of CommonJS
- Codebase is separated (at least 7 module)
- The program is started by npm-script start in following way:

```bash
npm run start -- --username=your_username
```

- After starting the program displays the following text in the console  
`Welcome to the File Manager, username!`  
- After program work finished (`ctrl + c` pressed or user sent `.exit` command into console) the program displays the following text in the console  
`Thank you for using File Manager, username!`  
- At the start of the program and after each end of operation current working directory should be printed in following way:  
`You are currently in path_to_working_directory`  
- Starting working directory is current user's home directory (for example, on Windows it's something like `system_drive/Users/username`)
- By default program should prompt user in console to print commands and wait for results  
- In case of unknown operation or invalid input `Invalid input` message should be shown and user should be able to enter another command
- In case of error during execution of operation `Operation failed` message should be shown and user user should be able to enter another command
- Attempt to perform an operation on a non-existent file or work on a non-existent path should result in the operation fail `Operation failed`
- User can't go upper than root directory (e.g. on Windows it's current local drive root). If user tries to do so, current working directory doesn't change
- All commands should work properly if path contains spaces. Use quote in this case.  

## List of operations and their syntax:
- Navigation & working directory
    - Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)  
    ```bash
    up
    ```
    - Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
    ```bash
    cd path_to_directory
    ```
    Use quotes, if path contains spaces.

    Example:
    ```bash
    cd "src/test folder"
    ```
    - List all files and folder in current directory and print it to console
    ```bash
    ls
    ```

- Basic operations with files
    - Read file and print it's content in console (`path_to_file` can be relative or absolute).
    ```bash
    cat path_to_file
    ```
    - Create empty file in current working directory (`new_file_name` should be only filename with extension)
    ```bash
    add new_file_name
    ```
    - Rename file (`path_to_file` can be relative or absolute, `new_file_name` should be only filename with extension)
    ```bash
    rn path_to_file new_file_name
    ```
    - Copy file (`path_to_file` can be relative or absolute, `path_to_new_directory` should be path to directory)
    ```bash
    cp path_to_file path_to_new_directory
    ```
    - Move file (same as copy but initial file is deleted). (`path_to_file` can be relative or absolute, `path_to_new_directory` should be path to directory)
    ```bash
    mv path_to_file path_to_new_directory
    ```
    - Delete file (`path_to_file` can be relative or absolute)
    ```bash
    rm path_to_file
    ```

- Operating system info (prints following information in console)
    - Get EOL (default system End-Of-Line)  
    ```bash
    os --EOL
    ```
    - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)  
    ```bash
    os --cpus
    ```
    - Get home directory 
    ```bash
    os --homedir
    ```
    - Get current *system user name* (Do not confuse with the username that is set when the application starts)  
    ```bash
    os --username
    ```
    - Get CPU architecture for which Node.js binary has compiled  
    ```bash
    os --architecture
    ```

- Hash calculation  
    - Calculate hash (SHA-256) for file and print it in HEX into console (`path_to_file` can be relative or absolute)
    ```bash
    hash path_to_file
    ```

- Compress and decompress operations  
    - Compress file using Brotli algorithm. (`path_to_file` and `path_to_destination` can be relative or absolute) 
    ```bash
    compress path_to_file path_to_destination
    ```
    - Decompress file using Brotli algorithm. (`path_to_file` and `path_to_destination` can be relative or absolute) 
    ```bash
    decompress path_to_file path_to_destination
    ```
