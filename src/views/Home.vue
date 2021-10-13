<template>
  <div class="home">
    <div>

      <h2 class="terrenosDisponibles" v-if="arrayTerrenos.length == 0">No hay terrenos registrados para mostrar</h2>

      <b-container  class="cards-container">

        <b-card-group deck v-for="terreno of arrayTerrenos" class="title__item">
          <b-card
            title="Terreno"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; margin: 2%;"
            class="item-container"
          >
            <b-card-text class="txtMargin list-card">Terreno Agrícola</b-card-text>
            <b-card-text class="txtMargin list-card">Dueño: {{terreno.ownerName}}</b-card-text>
            <b-card-text class="txtMargin list-card">Hectareas: {{terreno.numberHectares}}</b-card-text>
            <b-card-text class="txtMargin list-card">Ubicación: {{terreno.locationTerritory}}</b-card-text>
            <b-card-text class="txtMargin list-card">Sistema de riego: {{terreno.irrigationSystems}}</b-card-text>
            <b-card-text class="txtMargin list-card">Estado: {{terreno.Abailability}}</b-card-text>
            <b-card-text class="txtMargin list-card">Descripción: {{terreno.Descriptions}}</b-card-text>


              
            </b-modal>
              <b-button variant="primary" class="botonCard" href="/editar-terreno">Editar</b-button>
              <b-button  v-b-modal.terreno-6-eliminar variant="danger" class="botonCard"  @click="deleteTerreno(terreno._id)">Eliminar</b-button>
            </b-modal>


          </b-card>
        </b-card-group>
      </b-container>   
    </div> 
  </div>
</template>


<!-- CSS -->
<style scoped>
  .txtMargin{
    margin-bottom: -1%;
    text-align: left;
    font-size: 18px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .botonCard {
    margin: 1%; 
    margin-top: 5%;
    border-radius: 15px;
    width: 30%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .botonModal {
    border-radius: 15px;
  }

  .terrenosDisponibles {
    margin: 10%;
    font-family: "Raleway", sans-serif !important;
    
  }

  .cards-container {
    margin-top: 2%;
    margin: 5 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
  }

  .cards-container > .item {
    height: 100%;
  
  }

  .cards-container .item .title__item p {
    border-radius: 5px;
    background-color: #34b233;
    text-align: center;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
  }

  .list-card li {
    list-style: none;
  }

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      arrayTerrenos: [],
      form: {
        nameCantidaHectareas: '',
        ubicacionTerreno: null,
        nombreDuenio: '',
        sistemaRiego: null,
        text: '',
        file1: null,
        dispobilidadTerreno: null
      },
      sistemaRiego: [{ text: 'Seleccione el sistema de riego', value: null }, 'Goteo', 'Gravedad', 'Bombeo', 'Aspersión'],
      ubicacionTerreno: [{ text: 'Seleccione la ubicación del terreno', value: null }, 'Neiva', 'Garzón', 'La plata', 'Campoalegre'],
      dispobilidadTerreno: [{ text: 'Seleccione la disponibilidad del terreno', value: null }, 'Ocupado', 'Libre'],
      show: true
      }
    },
    created() {
      this.getTerritorios();
    },
    methods: {
      onSubmit(event) {
          event.preventDefault()
          alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.nameCantidaHectareas = ''
        this.ubicacionTerreno = null
        this.nombreDuenio = ''
        this.sistemaRiego = null
        this.text = ''
        this.file1 = null
        this.dispobilidadTerreno = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
            this.show = true
        })
      },
      getTerritorios() {
        fetch('http://localhost:3000/territory', {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },

        })
        .then(res => res.json())
        .then(data => {
          this.arrayTerrenos = data;
        });
      },
      deleteTerreno(id) {
        fetch('http://localhost:3000/territory', {
          method: 'DELETE',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({'id': id})
        })
        .then(res => res.json())
        .then(data => {
          this.getTerritorios();
        })

      }
    }
  
}

</script>
