<template>
  <v-app>
    <v-div ref="content">
      hey
    </v-div>
    <v-btn
      color="warning"
      @click.stop="download()"
    >
      Submit
    </v-btn>
  </v-app>
</template>
<script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script>
import JsPDF from 'jspdf'
// import html2canvas from 'html2canvas'
export default {
  props: {
    source: String
  },
  methods: {
    download () {
      const doc = new JsPDF()
      console.log(this.$refs.content.innerHTML)
      const contentHtml = this.$refs.content.innerHTML
      doc.fromHTML(contentHtml, 15, 15, {
        width: 170
      })
      doc.save('sample.pdf')
    }
    // downloadWithCSS() {
    //   const doc = new jsPDF();
    //   /** WITH CSS */
    //   var canvasElement = document.createElement('canvas');
    //     html2canvas(this.$refs.content, { canvas: canvasElement
    //       }).then(function (canvas) {
    //     const img = canvas.toDataURL("image/jpeg", 0.8);
    //     doc.addImage(img,'JPEG',20,20);
    //     doc.save("sample.pdf");
    //   });
    // },
  }
}
</script>
