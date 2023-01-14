# File-System-CRUD-API
- It's a file system api, which can do CRUD operations. 
- It's built on `REST` api architecture.
- Below is the description table.
> Don't forget to read the Note below :)

> Format : `{HostedURL}/{endPointURL}`



|   Task       |     Method/HTTP Verb      |    Path/ Endpoint URL      |
| :---------   |     :--------------:      |     :---------------:      |
| 1. Upload a file ( as form data : `key=file-upload` & value={filetobeuploaded} ) |POST |  `/files/upload`  |
| 2. Get list of all files                                                    | GET  |  `/files`        |
| 3. Download a file                                                          | GET  | `/files/{filename}`  |
| 4. Update a file  ( new file as form data )                                 | PUT  | `/files/update/{filename}`  |
| 5. Delete a file                                                            | DELETE | `/files/delete/{filename}` |


## Demo/Usage
> **1. Upload a file :**
![image](https://user-images.githubusercontent.com/76772181/212372625-433bb548-03eb-4381-84b5-646637997d57.png)

> **2. Downoad a file :**
![image](https://user-images.githubusercontent.com/76772181/212461025-2345b4aa-f78d-47ed-89cd-875f3ee0d8e6.png)

## Note 
1. File Size Limit is **5MB** .
2. In task 1, key must be named as **"file-upload"** 
3. Don't forget to clear the form data(uncheck key-value pair) while doing task 2, 3, and 5.
4. In task 4, in `/files/update/{filename}`, **{filename}** is the name of file that is to be replaced with the new file.
