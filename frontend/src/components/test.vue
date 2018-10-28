<template>
  <v-container>
    <template>
      <div>
        <v-layout row justify-left>
        <v-dialog v-model="dialog" persistent max-width="800px">

        <v-btn slot="activator" color="success" dark v-on:click="form=form_clear">Course</v-btn>

        <v-card>
            <v-card-title>
            <span class="headline">Create Course</span>
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
                        v-model="form.faculty"
                        ></v-autocomplete>
                    </v-flex>

                    <v-flex xs12 sm6>
                        <v-autocomplete
                        :items="['ปริญญาตรี', 'ปริญญาโท', 'ปริญญาเอก']"
                        label="ระดับปริญญา"
                        hint="Degree" persistent-hint
                        v-model="form.degree_lv"
                        ></v-autocomplete>
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
                <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-layout>

      </div>
  </template>
      <v-card flat @click.native="dialog"> 
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
      <template slot="items" slot-scope="props" @click="template">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left" >{{ props.item.name_en }}</td>
        <td class="text-xs-left">{{ props.item.name_th }}</td>
        <td class="text-xs-left">{{ props.item.major_en }}</td>
        <td class="text-xs-left">{{ props.item.major_th }}</td>
        <td class="text-auto-left"><v-btn color="warning"  v-on:click ="form= props.item,dialog=true">Edit</v-btn><v-btn color="error">Delete</v-btn></td>
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
        form:{
            id: 0,
            name_en: '',
            name_th: '',
            major_en: '',
            major_th: '',
            faculty: '',
            degree_lv: '',
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
            faculty: '',
            degree_lv: '',
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
        details: [
          {
            value: false,
            id: 1,
            name_en: 'Bachelor of Arts',
            name_th: 'ปริญญาศิลปศาสตร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาตรี',
            degree_name_en: 'Bachelor of Arts',
            degree_name_th: 'ศิลปศาสตรบัณฑิต',
            degree_short_en: 'B.A.',
            degree_short_th: 'ศศ.บ.'
          },
           {
            value: false,
            id: 2,
            name_en: 'Bachelor of Arts',
            name_th: 'ปริญญาศิลปศาสตร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาโท',
            degree_name_en: 'Master of Arts',
            degree_name_th: 'ศิลปศาสตรมหาบัณฑิต',
            degree_short_en: 'M.A.',
            degree_short_th: 'ศศ.ม.'
            
          },
           {
            value: false,
            id: 3,
            name_en: 'Bachelor of Arts',
            name_th: 'ปริญญาศิลปศาสตร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาตรี',
            degree_name_en: 'Doctor of Arts',
            degree_name_th: 'ศิลปศาสตรดุษฎีบัณฑิต',
            degree_short_en: 'D.A.',
            degree_short_th: 'ศศ.ด.'
          },
           {
            value: false,
            id: 4,
            name_en: 'Bachelor of Science',
            name_th: 'ปริญญาวิทยาศาสตร',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาตรี',
            degree_name_en: 'Bachelor of Science',
            degree_name_th: 'วิทยาศาสตรบัณฑิต',
            degree_short_en: 'B.S.,B.Sc.',
            degree_short_th: 'วท.บ.'
          },
           {
            value: false,
            id: 5,
            name_en: 'Bachelor of Science',
            name_th: 'ปริญญาวิทยาศาสตร',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาโท',
            degree_name_en: 'Master of Science ',
            degree_name_th: 'วิทยาศาสตรมหาบัณฑิต',
            degree_short_en: 'B.A.',
            degree_short_th: 'ศศ.บ'
          },
           {
            value: false,
            id: 6,
            name_en: 'Bachelor of Political Science',
            name_th: 'ปริญญาตามชื่อศาสตร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาตรี',
            degree_name_en: 'Bachelor of Political Science',
            degree_name_th: 'รัฐศาสตรบัณฑิต',
            degree_short_en: 'B.Pol.Sc.',
            degree_short_th: 'ร.บ.'
          },
           {
            value: false,
            id: 7,
            name_en: 'Economics',
            name_th: 'สาขาวิชาเศรษฐศาสตร์ ',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาตรี',
            degree_name_en: 'Doctor of Economics',
            degree_name_th: 'เศรษฐศาสตรดุษฎีบัณฑิต',
            degree_short_en: 'D.Econ.',
            degree_short_th: 'ศ.ด.'
          },
           {
            value: false,
            id: 8,
            name_en: 'Current Topics in Computer Programming Development',
            name_th: 'หัวข้อปัจจุบันทางด้านการพัฒนาโปรแกรมคอมพิวเตอร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาตรี',
            degree_name_en: 'Bachelor of Arts',
            degree_name_th: 'ศิลปศาสตรบัณฑิต',
            degree_short_en: 'B.A.',
            degree_short_th: 'ศศ.บ'
          },
           {
            value: false,
            id: 9,
            name_en: 'Department of Accounting',
            name_th: 'สาขาวิชาการบัญชี',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาตรี',
            degree_name_en: 'Bachelor of Accountancy',
            degree_name_th: 'บัญชีบัณฑิต',
            degree_short_en: 'B.Acc.',
            degree_short_th: 'บช.บ.'
          },
           {
            value: false,
            id: 10,
            name_en: 'Thai Traditional Medicine',
            name_th: 'สาขาวิชาการแพทย์แผนไทย',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาเอก',
            degree_name_en: 'Doctor of Thai Traditional Medicine',
            degree_name_th: 'การแพทย์แผนไทยดุษฎีบัณฑิต',
            degree_short_en: 'D.TM.',
            degree_short_th: 'พท.ด.'
          },
           {
            value: false,
            id: 11,
            name_en: 'Software Verification and Validation',
            name_th: 'การทวนสอบและตรวจสอบซอฟต์แวร์',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาตรี',
            degree_name_en: 'Bachelor of Arts',
            degree_name_th: 'ศิลปศาสตรบัณฑิต',
            degree_short_en: 'B.A.',
            degree_short_th: 'ศศ.บ'
          },
           {
            value: false,
            id: 12,
            name_en: 'Chinese Medicine',
            name_th: 'สาขาวิชาการแพทย์แผนจีน',
            major_en: 'Software Engineering',
            major_th: 'วิศวกรรมซอฟต์แวร์',
            faculty: 'คณะวิศวกรรมศาสตร์',
            degree_lv: 'ปริญญาตรี',
            degree_name_en: 'Master of Traditional Chinese Medicine',
            degree_name_th: 'การแพทย์แผนจีนมหาบัณฑิต ',
            degree_short_en: 'M.CM.',
            degree_short_th: 'พจ.ม'
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
