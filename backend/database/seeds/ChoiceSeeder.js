'use strict'

/*
|--------------------------------------------------------------------------
| ChoiceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Choice = use('App/Models/Choice')
class ChoiceSeeder {
  async run () {
    const name = ['คณะเกษตรศาสตร์และทรัพยากรธรรมชาติ',
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
                  'วิทยาลัยการจัดการ'];
    
    for (let index = 0; index < name.length; index++) {
      const element = name[index];
      const choice = new Choice();
      choice.id = 30000+index
      choice.name = element
      await choice.save()
    }

    const degree_lv = ['ปริญญาตรี', 'ปริญญาโท', 'ปริญญาเอก']
    for (let index = 0; index < degree_lv.length; index++) {
      const element = degree_lv[index];
      const choice = new Choice();
      choice.id = 31000+index
      choice.name = element
      await choice.save()
    }
  }
}

module.exports = ChoiceSeeder
