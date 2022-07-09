<template>
  <div class="scroll">
    <ul class="index">
      <li>110</li>
      <li>210</li>
      <li>310</li>
      <li>410</li>
      <li>510</li>
      <li>610</li>
      <li>710</li>
      <li>810</li>
      <li>910</li>
      <li>1010</li>
         <li>110</li>
      <li>210</li>
      <li>310</li>
      <li>410</li>
      <li>510</li>
      <li>610</li>
      <li>710</li>
      <li>810</li>
      <li>910</li>
      <li>1010</li>

         <li>110</li>
      <li>210</li>
      <li>310</li>
      <li>410</li>
      <li>510</li>
      <li>610</li>
      <li>710</li>
      <li>810</li>
      <li>910</li>
      <li>1010</li>
         <li>110</li>
      <li>210</li>
      <li>310</li>
      <li>410</li>
      <li>510</li>
      <li>610</li>
      <li>710</li>
      <li>810</li>
      <li>910</li>
      <li>1010</li>
         <li>110</li>
      <li>210</li>
      <li>310</li>
      <li>410</li>
      <li>510</li>
      <li>610</li>
      <li>710</li>
      <li>810</li>
      <li>910</li>
      <li>1010</li>

    </ul>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    name:'Category',
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      this.scroll = new BetterScroll(document.querySelector('.scroll'),{

      })
    }
}
</script>

<style scoped>
.scroll {
  /* width:100px; */
  height:200px;
  background: red;
  overflow: hidden;;
}

</style>