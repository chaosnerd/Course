<template>
  <v-container>
     <v-data-table
      :headers="headers"
      :items="details"
      class="elevation-1"
      id="table"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.name_en }}</td>
        <td class="text-xs-left">{{ props.item.name_th }}</td>
        <td class="text-xs-left">{{ props.item.major_en }}</td>
        <td class="text-xs-left">{{ props.item.major_th }}</td>
        <td class="text-xs-left"><v-btn color="warning">Edit</v-btn><v-btn color="error">Delete</v-btn></td>

        
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {        
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false ,
            value: 'name'
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
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 2,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 3,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 4,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 5,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 6,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 7,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 8,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 9,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 10,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 11,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },
           {
            value: false,
            id: 12,
            name_en: 'Computer',
            name_th: 'คอมพิวเตอร์',
            major_en: 'ICT',
            major_th: 'เทคโนโลยีสารสนเทศ'
          },

          
          
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
