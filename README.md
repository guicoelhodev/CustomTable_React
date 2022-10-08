<h1 align="center">React Custom Table</h1>

<img align="center" src="./.github/table_example.png" alt="table example" />

<br/>
<h3 align="center"> This project was created with the intention of improving the creation of tables and the speed to create them</h3>

<br/>

<ul>
  <li><a href="disclaimer"><h3>Disclaimer!</h3></a></li>
  <li><a href="howWorks"><h3>How it works?</h3></a></li>
  <li><a href="useIt"><h3>How to use?</h3></a></li>
</ul>

<br />

<h2 id="disclaimer">Disclaimer</h2>

<p>To be able to use this component, the object must have only one level of properties</p>

<div>

```
// correct method:

let data = {
  name: "My name",
  age: 20,
  city: "My city",
  phone: "99999999999"
}
```

```
// wrong method

let data = {
  user: {
    name: "My name",
    age: 20
  },
  city: "My City",
  phone: "99999999999"
};

```

</div>
