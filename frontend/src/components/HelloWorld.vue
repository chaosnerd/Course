<template>
  <v-container>

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
      <div>
        <v-layout row justify-left>
        <v-dialog v-model="dialog" persistent max-width="800px">

        <v-btn slot="activator" color="success" dark>Create Course</v-btn>

        <v-card>
            <v-card-title>
            <span class="headline">Create Course</span>
            </v-card-title>
            <v-card-text style="height: 450px;">
            <v-container grid-list-md>
                <v-layout wrap>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อหลักสูตรภาษาไทย*" hint="Course Name TH" persistent-hint required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อหลักสูตรภาษาอังกฤษ*" hint="Course Name EN" persistent-hint required></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อสาขาภาษาไทย*" hint="Major Name TH" persistent-hint required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อสาขาภาษาอังกฤษ*" hint="Major Name EN" persistent-hint required></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-autocomplete
                        :items="['คณะเกษตรศาสตร์และทรัพยากรธรรมชาติ',
                                    'คณะวิศวกรรมซอฟต์แวร์และการสื่อสาร',
                                    'คณะพยาบาลศาสตร์',
                                    'คณะเภสัชศาสตร์',
                                    'คณะวิทยาศาสตร์',
                                    'คณะวิศวกรรมศาสตร์',
                                    'คณะสถาปัตยกรรมศาสตร์และศิลปกรรมศาสตร์',
                                    'คณะทันตแพทยศาสตร์',
                                    'คณะนิติศาสตร์',
                                    'คณะแพทยศาสตร์',
                                    'คณะรัฐศาสตร์และสังคมศาสตร์',
                                    'คณะวิทยาการจัดการและสารสนเทศศาสตร์',
                                    'คณะวิทยาศาสตร์การแพทย์',
                                    'คณะศิลปศาสตร์',
                                    'คณะสหเวชศาสตร์',
                                    'วิทยาลัยพลังงานและสิ่งแวดล้อม',
                                    'วิทยาลัยการศึกษา',
                                    'วิทยาลัยการจัดการ']"
                        label="คณะ"
                        hint="Faculty" persistent-hint
                        ></v-autocomplete>
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-autocomplete
                        :items="['ปริญญาตรี', 'ปริญญาโท', 'ปริญญาเอก']"
                        label="ระดับปริญญา"
                        hint="Degree" persistent-hint
                        ></v-autocomplete>
                    </v-flex>

                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อปริญญาภาษาไทย*" hint="Degree Name TH" persistent-hint required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อปริญญาอังกฤษ*" hint="Degree Name EN" persistent-hint required></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อย่อปริญญาภาษาไทย*" hint="Degree Short Name TH" persistent-hint required></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <v-text-field label="ชื่อย่อปริญญาอังกฤษ*" hint="Degree Short Name EN" persistent-hint required></v-text-field>
                    </v-flex>

                </v-layout>
            </v-container>
            <small>*indicates required field</small>
            </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-layout>

      </div>
  </template>
      <v-card>
        <v-card-title>
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
        <td class="text-auto-left"><v-btn color="warning">Edit</v-btn><v-btn color="error">Delete</v-btn></td>
      </template>

      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>

    </v-data-table>
    </v-card>
  </v-container>

</template>



<script>
  export default {
    data () {
      return { 
        dialog: false,
        search: '',  
        pagination: {
          sortBy: 'ID'
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
        details: [
          {
            value: false,
            id: 1,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 2,
            name_en: 'Math',
            name_th: 'คณิตศาสตร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 3,
            name_en: 'Science',
            name_th: 'วิทยาศาสตร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 4,
            name_en: 'Computer Science',
            name_th: 'วิทยาการคอมพิวเตอร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 5,
            name_en: 'Physic I',
            name_th: 'ฟิสิกส์ 1',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 6,
            name_en: 'Physic II',
            name_th: 'ฟิสิกส์ 2',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 7,
            name_en: 'Physic III',
            name_th: 'ฟิสิกส์ 3',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 8,
            name_en: 'Current Topics in Computer Programming Development',
            name_th: 'หัวข้อปัจจุบันทางด้านการพัฒนาโปรแกรมคอมพิวเตอร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 9,
            name_en: 'Music in Thai Society',
            name_th: 'ดนตรีกับชีวิตในสังคมไทย',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 10,
            name_en: 'Artificial Intelligence',
            name_th: 'ปัญญาประดิษฐ์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 11,
            name_en: 'Software Verification and Validation',
            name_th: 'การทวนสอบและตรวจสอบซอฟต์แวร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
           {
            value: false,
            id: 12,
            name_en: 'Ethic and Law for Software Engineering',
            name_th: 'จริยธรรมและกฎหมายสำหรับวิศวกรรมซอฟต์แวร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์'
          },
        ],
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
