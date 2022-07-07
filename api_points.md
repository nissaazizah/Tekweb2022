# API POINTS #
## USER ##
**Menampilkan data semua pengguna**
```
GET: /users

response:

[
  {
    "id"          : "",
    "name"        : "",
    "ig_url"      : "",
    "wa_url"      : "",
    "thumbnail"   : "",
  },
  
]
```
**Menampilkan data dengan id tertentu**
```
GET: /users/[id]

response :

{
    "id"          : "".
    "name"        : "",
    "ig_url"      : "",
    "gh_url"      : "",
    "wa_url"      : "",
    "thumbnail"   : "", 
}
```
**Menambahkan data pengguna**
```
POST: /users

data:
{
    "name"      : "",
    "motto"     : "",
    "ig_url"    : "",
    "gh_url"    : "",
    "wa_url"    : "", 
}

response:
true    // if success
false   // if failure
```
**Edit data pengguna**
```
PUT: /users

data:
{
    "id"        : "",
    "name"      : "",
    "motto"     : "",
    "ig_url"    : "",
    "gh_url"    : "",
    "wa_url"    : "", 
}
  
response:
true    // if success
false   // if failure
```
**Menghapus data anggota**
```
DELETE: /users

response:
true    // if success
false   // if failure
```
## PORTOFOLIOS ##
**Menampilkan demua data portofolio**
```
GET: /portofolios

response:
[
  {
        "id"        : "",
        "title"     : "",
        "deskripsi  : "",
        "thumbnail  : "",
  },
  
]
```
**Menampilkan data portofolio berdasarkan id**
```
GET: /portofolios/[id]

response:

{
     "id"        : "",
     "title"     : "",
     "deskripsi  : "",
     "thumbnail  : "",
}
```
**Menambahkan data portofiolo**
```
data:
{
     "id"        : "",
     "title"     : "",
     "deskripsi  : "",
     "thumbnail  : "",
}
```
**Memperbarui data portofolio**
```
PUT: /portofolios

data:
{
     "id"        : "",
     "title"     : "",
     "deskripsi  : "",
     "thumbnail  : "",
}

response:

true    // if success
false   // if failure
```
**Menghapus data portofolio**
```
DELETE: /portofolios/[id]

response:
true    // if success
false   // if failure
```
## ARTICLES ##
**Menampilkan data semua artikel**
```
GET: /articles

response:
[
  {
     "id"           : "",
     "title"        : "",
     "thumbnail     : "",
     "markdown      : "",
     "content       : "",
  }
]
```
**Menampilkan data artiker dengan id tertentu**
```
GET: /articles/[id]

response:
{
     "id"           : "",
     "title"        : "",
     "thumbnail     : "",
     "markdown      : "",
     "content       : "",
}
```
**Menambahkan artikel**
```
POST: /articles

data:
{
     "id"           : "",
     "title"        : "",
     "thumbnail     : "",
     "markdown      : "",
     "content       : "",
}
response :
true    // if success
false   // if failure
```
**Memperbarui article**
```
PUT: /article

data:
{
     "id"           : "",
     "title"        : "",
     "thumbnail     : "",
     "markdown      : "",
     "content       : "",
}

response:
true    // if success
false   // if failure
```
**Menghapus artikel**
```
DELETE: /articles/[id]

response:
true    // if success
false   //if failure
```
## DESAIN DATABASE ##
**Desain database untuk menyediakan API POINTS adalah sebagai berikut:**



