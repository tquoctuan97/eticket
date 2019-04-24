<template>
  <!--copyright-->
  <footer>
        <p class="aside__copy-right">© eTicket App. All rights reserved.</p>
      <div class="apps">
        <a href="https://play.google.com">
          <img width="140" src="/google_play.png">

        </a>
        <a href="https://play.google.com">
        <img width="140" src="/app_store.png">
        </a>
      </div>
  </footer>
  <!--end copyright-->
</template>

<script>
export default {};
</script>

<style>
footer {
  box-shadow:         0px -7px 15px -4px rgba(0,0,0,0.05);
  height: 100px;
  padding: 15px 40px;
  width: 100%;
  line-height: 50px;
  font-size: 13px;
  text-align: center;
  color: rgba(0,0,0, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  flex-wrap: wrap;
  z-index: 3;
  background-color: #000;
  color: white;
}
footer .apps{
  display: flex;
  align-items: center;
}
footer .apps >a:first-child{
  margin-right: 20px;
}
footer .apps img{
  transition: 0.3s all ease-in-out;
}
footer .apps >a{
  height: 100%;
  display: flex;
  align-items: center;
}
footer .apps >a:hover img{
  opacity: 0.8;
}
footer p{
  margin-bottom: 0;
}
</style>
