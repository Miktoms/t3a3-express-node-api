CREATE TABLE profile( 
  Userid int,
  Firstname varchar,
  Lastname varchar,
  Picture Object,
  Religion varchar,
  Birthday date,
  Messenger varchar
);

create table FriendRelation(
  AreFriends varchar,
  UserId1 int,
  UserId2 int
);

create table Relationship(
  Engaged varchar,
  InaRelationship varchar,
  IsSingle varchar,
  ItsComplcated varchar,
  Married varchar
);

Create Table Photo (
  AlbumID varchar, 
  Caption varchar,
  created TIMESTAMP not null,
  link hyperlink,
  phowner int,
  PhotoID int,
  phLocation varchar
);

Create Table PhotoAlbum (
  AlbumID int ,
  Created timestamp not null,
  Descrip varchar,
  Locale uniqueidentifier,
  Modified timestamp
);
Create Table PhotoTag (
  PhotoID int,
  Loc int,
  Userid int 
);
Create Table Locale (
  LocationID varchar,
  City varchar, 
  countries varchar,
  Province varchar,
  Street varchar,
  Zipcode varchar
);
Create table Messenger (
  MessengerID varchar
);

create Table Gender (
  Unsecified varchar,
  Male varchar,
  Female varchar
);
create Table WorkPlace (
  Workplace varchar, 
  DescribeWork varchar,
  StartDate DATETIME,
  EndDate DATETIME,
  Position varchar
);
create Table Affiliation (
  IDName varchar,
  NID int,
  AffiliationStatus varchar,
  Year Year
);