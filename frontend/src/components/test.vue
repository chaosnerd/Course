<template>
    <div id="test">
        <v-layout row justify-center>
        <v-dialog v-model="dialog" persistent max-width="800px">

        <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>

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
                                    'คณะเทคโนโลยีสารสนเทศและการสื่อสาร',
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

<script>
  export default {
    data: () => ({
      dialog: false
    })
  }
</script>

<style>
#test{
    padding-left: 7%;
}
</style>

