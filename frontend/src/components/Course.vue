<template>
  <v-container>
      <v-dialog
        v-model="dialog1"
        width="500"
      >
        
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            Course info
          </v-card-title>

          <v-card-text>
            <v-flex xs12 sm6 md12>
                       ชื่อหลักสูตรภาษาอังกฤษ : {{form.name_en}}
            </v-flex>
            <v-flex xs12 sm6 md12>
                       ชื่อหลักสูตรภาษาไทย : {{form.name_th}}
            </v-flex>
            <v-flex xs12 sm6 md12>
                       ชื่อสาขาภาษาอังกฤษ : {{form.major_en}}
            </v-flex>
            <v-flex xs12 sm6 md12>
                       ชื่อสาขาภาษาไทย : {{form.major_th}}
            </v-flex>
            <v-flex xs12 sm6 md12>
                       คณะ : {{form.faculty_choice_id}}
            </v-flex>
            <v-flex xs12 sm6 md12>
                       ระดับปริญญา : {{form.degrees_choice_id}}
            </v-flex>
            <v-flex xs12 sm6 md12>
                       ชื่อปริญญาอังกฤษ : {{form.degree_name_en}}
            </v-flex>
            <v-flex xs12 sm6 md12>
                       ชื่อปริญญาภาษาไทย : {{form.degree_name_th}}
            </v-flex>
            <v-flex xs12 sm6 md12>
                       ชื่อย่อปริญญาภาษาอังกฤษ : {{form.degree_short_en}}
            </v-flex>
            <v-flex xs12 sm6 md12>
                       ชื่อย่อปริญญาภาษาไทย : {{form.degree_short_th}}
            </v-flex>
            
              
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              v-on:click="dialog1 = false"
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <template>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </template>

    <br><br>

    <template>
      
  </template>
      <v-card>
        <v-card-title>
          <div>
        <v-layout row justify-left>
        <v-dialog v-model="dialog" persistent max-width="800px">

        <v-btn slot="activator" color="success" dark v-on:click="form=form_clear">Course</v-btn>
        
        <v-card>
            <v-card-title>
            <span class="headline">Create</span>
            </v-card-title>
            <v-card-text style="height: 450px;">
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อหลักสูตรภาษาไทย*" hint="Course Name TH" persistent-hint required  v-model="form.name_th"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อหลักสูตรภาษาอังกฤษ*" hint="Course Name EN" persistent-hint required v-model="form.name_en"></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อสาขาภาษาไทย*" hint="Major Name TH" persistent-hint required v-model="form.major_th"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อสาขาภาษาอังกฤษ*" hint="Major Name EN" persistent-hint required v-model="form.major_en"></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-select
                            :items="faculty_choice"
                            item-value="id"
                            item-text="name"
                            v-model="form.faculty_choice_id"
                        ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6>
                        <v-select
                            :items="degree_choice"
                            item-value="id"
                            item-text="name"
                            v-model="form.degrees_choice_id"
                        ></v-select>
                    </v-flex>

                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อปริญญาภาษาไทย*" hint="Degree Name TH" persistent-hint required v-model="form.degree_name_th"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อปริญญาอังกฤษ*" hint="Degree Name EN" persistent-hint required v-model="form.degree_name_en"></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อย่อปริญญาภาษาไทย*" hint="Degree Short Name TH" persistent-hint required v-model="form.degree_short_th"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อย่อปริญญาอังกฤษ*" hint="Degree Short Name EN" persistent-hint required v-model="form.degree_short_en"></v-text-field>
                    </v-flex>

                </v-layout>
            </v-container>
            <small>*indicates required field</small>
            </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="dialog = false" v-on:click="save">Save</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>

        
    </v-layout>

      </div>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>

     <v-data-table
      :headers="headers"
      :items="details"
      :search="search"
      class="elevation-1"
      id="table"
      :pagination.sync="pagination"
      :rows-per-page-items='[ 10, 25, { "text": "$vuetify.dataIterator.rowsPerPageAll", "value": -1 } ]'
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name_en }}</td>
        <td class="text-xs-left">{{ props.item.name_th }}</td>
        <td class="text-xs-left">{{ props.item.major_en }}</td>
        <td class="text-xs-left">{{ props.item.major_th }}</td>
        <td class="text-auto-left">
          <v-btn color="success" v-on:click="viewItem(props.item)">View</v-btn>
          <v-btn color="warning" @click="editItem(props.item)">Edit</v-btn>
          <v-btn color="error" @click="deleteItem(props.item)">Delete</v-btn>
        </td>
      </template>

      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>

    </v-data-table>
    </v-card>
  </v-container>

</template>



<script>
    const axios = require('axios');
    export default {
    /* eslint-disable */
    mounted(){
        this.init()
    },
    methods: {
    init(){
        axios.get(this.$url+'/course/courses')
        .then((res)=> {
            // handle success
            this.details = res.data
            console.log(res.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });

        axios.get(this.$url+'/choice/all')
        .then((res)=> {
            // handle success
            this.choice = res.data
            for (let index = 0; index < this.choice.length; index++) {
                const element = this.choice[index];
                if (element.id >= 31000 && element.id < 32000 ) {
                    this.degree_choice.push(element)
                }
                if (element.id >= 30000 && element.id < 31000 ) {
                    this.faculty_choice.push(element)
                }

            }
            console.log(this.degree)
            // console.log(res.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    },
      viewItem (item) {
        this.form = Object.assign({}, item)
        this.dialog1 = true
      },
      editItem (item) {
        this.editedIndex = -1 
        this.editedIndex = this.details.indexOf(item)
        this.form = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.details.indexOf(item)
        // confirm('Are you sure you want to delete this Course?') && this.details.splice(index, 1)
        let bool = confirm('Are you sure you want to delete this Course?')
        if (bool) {
             axios.delete(this.$url+'/course/courses/'+item.id)
            .then((res)=> {
                // handle success
                this.details.splice(index, 1)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        }
      },
      save () {
        if (this.editedIndex > -1) {
            console.log(this.form)
            axios.put(this.$url+'/course/courses/'+this.form.id,this.form)
            .then((res) => {
                console.log(res.data)
                Object.assign(this.details[this.editedIndex], this.form)
            })
            .catch(function (error) {
                console.log(error);
            });

        } else {
            console.log(this.form)
            axios.post(this.$url+'/course/courses',this.form)
            .then((res) => {
                console.log(res.data)
                this.details.push(res.data)
            })
            .catch(function (error) {
                console.log(error);
            });
            this.form = this.form_clear;        
        }
      }
    },
    data () {
      return { 
        editedIndex:-1,
        dialog: false,
        dialog1: false,
        search: '',  
        pagination: {
          sortBy: 'ID'
        },
        faculty_choice:[
           
        ],
        degree_choice:[
           
        ],
        choice:[
           
        ],
        form:{
            id: 0,
            name_en: '',
            name_th: '',
            major_en: '',
            major_th: '',
            faculty_choice_id: '',
            degrees_choice_id: '',
            degree_name_en: '',
            degree_name_th: '',
            degree_short_en: '',
            degree_short_th: ''
        },
        form_clear:{
            id: 0,
            name_en: '',
            name_th: '',
            major_en: '',
            major_th: '',
            faculty_choice_id: '',
            degrees_choice_id: '',
            degree_name_en: '',
            degree_name_th: '',
            degree_short_en: '',
            degree_short_th: ''
        },
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: true ,
            // value: 'name'
          },
          { text: 'Course Name', value: 'name_en' },
          { text: 'ชื่อหลักสูตร', value: 'name_th' },
          { text: 'Major', value: 'major_en' },
          { text: 'สาขา', value: 'major_th' },
          { text: 'Action', value: '' },
        ],
        details: [],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
</script>

<style>
  #id{
    width: 10%;
  }
</style>
