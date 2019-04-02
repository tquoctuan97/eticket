<template>
  <div>
    <aside class="aside">
      <!--logo-->
      <div class="aside__logo">
        <nuxt-link to="/">
          <img src="/logo-eticket.png" alt class="aside__logo__img">
        </nuxt-link>
      </div>
      <!--end logo-->
      <!--nav main-->
      <nav class="aside__nav">
        <ul class>
          <nuxt-link to="/" tag="li" class="aside__nav__link">
            <a>Home</a>
          </nuxt-link>
          <nuxt-link to="/about" tag="li" class="aside__nav__link">
            <a>About</a>
          </nuxt-link>
          <nuxt-link to="/products" tag="li" class="aside__nav__link">
            <a>Products</a>
          </nuxt-link>
          <nuxt-link to="/blogs" tag="li" class="aside__nav__link">
            <a>Organizer</a>
          </nuxt-link>
          <nuxt-link to="/contact" tag="li" class="aside__nav__link">
            <a>Contact</a>
          </nuxt-link>
        </ul>
      </nav>
      <!--end nav main-->
    </aside>
  </div>
</template>
 
<script>
export default {};
</script>
 
<style>
.aside {
  width: 100%;
  height: 96px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  border-right: 1px solid rgba(#000, 0.1);
  z-index: 999;
}

.aside__logo {
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 40px;
}

.aside__logo__img {
  width: 120px;
  display: inline-block;
}
.aside__nav ul {
  height: 100%;
  display: flex;
  align-items: center;
}
.aside__nav li {
  list-style: none;
  display: flex;
}
.aside__nav li a {
  color: #000;
  text-decoration: none;
}
.aside__nav__link {
  width: 100%;
  padding: 20px;
  text-align: right;
  padding-right: 40px;
}
.aside__nav__link a {
  color: rgba(#000, 0.6);
  font-size: 15px;
  letter-spacing: 1px;
}
.aside__nav__link:hover a,
.aside__nav__link:active a,
.aside__nav__link.nuxt-link-exact-active a {
  color: #25ca8f;
  position: relative;
  text-decoration: none;
}
</style>