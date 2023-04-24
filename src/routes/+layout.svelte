<script>
    import '../style.css';
    import logo from '$lib/components/logo.svg';
</script>

<header>
    <a href="/"><img src={logo} alt=""></a>
  <nav>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/about">ABOUT</a></li>
      <li><a href="/music">MUSIC</a></li>
      <li><a href="/myprofile">MYPROFILE</a></li>
    </ul>
  </nav>
</header>

<slot></slot>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400&display=swap');
    header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    background-color: #fff; /* задаём цвет фона */
    border-bottom: 1px solid #e8e8e8; /* добавляем границу снизу */
    }

    header img {
    height: 40px;
    }

    nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    }

    nav ul li {
    margin-left: 20px;
    }

    nav ul li:first-child {
    margin-left: 0;
    }

    nav ul li a {
    text-decoration: none;
    font-size: 20px;
    }

    nav ul li:hover {
    text-decoration: underline;
    }
</style>