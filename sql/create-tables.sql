CREATE TABLE ID
(
  ID INTEGER PRIMARY KEY AUTOINCREMENT ID,
  Firstname VARCHAR,
  Lastname VARCHAR,
  Picture Object,
  Religion VARCHAR,
  Birthday date,
);

create table FriendRelation
(
  AreFriends VARCHAR,
  UserId1 int,
  UserId2 int
);

create table Relationship
(
  Engaged VARCHAR,
  InaRelationship VARCHAR,
  IsSingle VARCHAR,
  ItsComplcated VARCHAR,
  Married VARCHAR
);

Create Table Photo (
  ID INTEGER PRIMARY KEY AUTOINCREMENT ID,
  AlbumID VARCHAR 
    FOREIGN KEY(Photo) REFERENCES ID, 
  Caption VARCHAR,
  created TIMESTAMP NOT NULL,
  link hyperlink,
  PhotoOwner int
    FOREIGN KEY(ID) REFERENCES ID,
  PhotoLocation VARCHAR
    FOREIGN KEY(Locale) REFERENCES ID
);

Create Table PhotoAlbum (
  ID INTEGER PRIMARY KEY AUTOINCREMENT ID,
  Created TIMESTAMP,
  Descrip VARCHAR,
  PhotoLocation VARCHAR
    FOREIGN KEY(Locale) REFERENCES ID,
  Modified TIMESTAMP
);
Create Table PhotoTag (
  ID INTEGER PRIMARY KEY AUTOINCREMENT ID,
  Userid int
    FOREIGN KEY(ID) REFERENCES ID
);
Create Table Locale (
  ID INTEGER PRIMARY KEY AUTOINCREMENT ID,
  House# VARCHAR,
  Street VARCHAR,
  City VARCHAR,
  Zipcode VARCHAR,
  Province VARCHAR,
  countries VARCHAR
);
Create table Messenger (
  MessengerID INTEGER
    FOREIGN KEY(ID) REFERENCES ID
);

create Table Gender (
  Unsecified VARCHAR,
  Male VARCHAR,
  Female VARCHAR
);
create Table WorkPlace (
  Workplace VARCHAR, 
  DescribeWork VARCHAR,
  StartDate DATETIME,
  EndDate DATETIME,
  Position VARCHAR
);
create Table Affiliation (
  ID INTEGER PRIMARY KEY AUTOINCREMENT ID,
  AffiliationStatus VARCHAR,
  Expirydate DATETIME
);
CREATE TABLE Filters (
  Clarendon VARCHAR,
  Gingham VARCHAR,
  Juno VARCHAR,
  Lark VARCHAR,
  Mayfair VARCHAR,
  Siera VARCHAR,
  Valencia VARCHAR,
  Walden VARCHAR
);
CREATE TABLE FilterProcessor (
  sparkAR INTEGER
);
