<template>
  <div class="home">
    <div>
      <b-container>

        <h2 style="margin: 10%;" v-if="arrayTerrenos.length == 0">No hay terrenos registrados para mostrar</h2>

        <b-card-group v-for="terreno of arrayTerrenos">
            <b-card
              title="Terreno"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; margin: 2%;"
            >
                <b-card-text class="txtMargin">Terreno Agrícola</b-card-text>
                <b-card-text class="txtMargin">Dueño: {{terreno.ownerName}}</b-card-text>
                <b-card-text class="txtMargin">Hectareas: {{terreno.numberHectares}}</b-card-text>
                <b-card-text class="txtMargin">Ubicación: {{terreno.locationTerritory}}</b-card-text>
                <b-card-text class="txtMargin">Sistema de riego: {{terreno.irrigationSystems}}</b-card-text>
                <b-card-text class="txtMargin">Estado: {{terreno.Abailability}}</b-card-text>
                <b-card-text class="txtMargin">Descripción: {{terreno.Descriptions}}</b-card-text>

                <b-button v-b-modal.terreno-1-editar variant="primary" class="botonCard">Editar</b-button>
                <b-modal id="terreno-1-editar" title="Actualizar Terreno">
                  <div>
                    <b-form  v-if="show">
                      <b-form-group id="input-group-1" label="Cantidad de hectáreas" label-for="input-1">
                          <b-form-input
                              id="input-1"
                              v-model="form.nameCantidaHectareas"
                              placeholder="Digite la cantidad de hectáreas"
                              required
                          ></b-form-input>
                      </b-form-group>
              
                      <b-form-group id="input-group-2" label="Ubicación del terreno" label-for="input-2">
                          <b-form-select
                            id="input-group-2"
                            v-model="form.ubicacionTerreno"
                            :options="ubicacionTerreno"
                            placeholder="Seleccione la ubicación de terreno"
                            required
                          ></b-form-select>
                      </b-form-group>
              
                      <b-form-group id="input-group-3" label="Nombre del dueño de la tierra" label-for="input-3">
                          <b-form-input
                            id="input-3"
                            v-model="form.nombreDuenio"
                            placeholder="Digite el nombre del dueño de la tierra"
                            required
                          ></b-form-input>
                      </b-form-group>
              
                      <b-form-group id="input-group-4" label="Sistema de riego:" label-for="input-4">
                          <b-form-select
                            id="input-4"
                            v-model="form.sistemaRiego"
                            :options="sistemaRiego"
                            required
                          ></b-form-select>
                          
                      </b-form-group>
              
                      <b-form-group id="input-group-5" label="Especificacioens del terreno:" label-for="input-5">
                          <b-form-textarea 
                            id="textarea" 
                            v-model="text" 
                            placeholder="Digite las especificaciones del terreno..." 
                            rows="3" 
                            max-rows="10"
                          ></b-form-textarea>
                      </b-form-group>
              
                      <b-form-group id="input-group-6" label="Seleccione las imagenes de su terreno:" label-for="input-6">
                          <b-form-file 
                            v-model="file1" 
                            :state="Boolean(file1)" 
                            placeholder="Seleccione las imagenes"
                          ></b-form-file>
                      </b-form-group>
              
                      <b-form-group id="input-group-7" label="Disponibilidad del terreno:" label-for="input-7">
                          <b-form-select
                              id="input-7"
                              v-model="form.dispobilidadTerreno"
                              :options="dispobilidadTerreno"
                              required
                              style="margin-bottom: -10%"
                          ></b-form-select>
                      </b-form-group>
                    </b-form>
                  </div>
                  <template #modal-footer="{ ok, cancel}">

                    <!-- Botones del Modal -->
                    <b-button variant="primary" class="botonModal" @click="ok()">
                      Registrar
                    </b-button>
                    <b-button variant="danger" class="botonModal" @click="cancel()">
                      Cancelar
                    </b-button>
                  </template>
                </b-modal>
                <b-button  v-b-modal.terreno-6-eliminar variant="danger" class="botonCard"  @click="deleteTerreno(terreno._id)">Eliminar</b-button>

                  
                </b-modal>
            </b-card>
        </b-card-group>

        <template #modal-footer="{ ok, cancel}">
          <!-- Botones del Modal -->
          <b-button variant="danger" class="botonModal" @click="ok()">
            Eliminar
          </b-button>
          <b-button variant="primary" class="botonModal" @click="cancel()">
            Cancelar
          </b-button>
        </template>

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
        fetch('http://localhost:3000/territory')
          .then(res => res.json())
          .then(data => {
            this.arrayTerrenos = data;
          });
      },
      deleteTerreno(id) {
        fetch('http://localhost:3000/territory/', {
          method: 'DELETE',
          headers: {
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
