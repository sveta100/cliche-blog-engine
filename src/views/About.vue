
<template>
  <div>
    <table class="table-body" />
  </div>
</template>

<script>
export default {
  data() {
    return {

      table: this.createTable(),
    };
  },
  methods: {
    createTable() {
      const answers = [{
        id: 0,
        difficulty: 1,
        ispassed: true,
      },
      {
        id: 0,
        difficulty: 1,
        ispassed: true,
      },
      {
        id: 0,
        difficulty: 2,
        ispassed: true,
      },
      {
        id: 0,
        difficulty: 0,
        ispassed: false,
      },
      {
        id: 0,
        difficulty: 0,
        ispassed: false,
      },
      ];
      const hashTable = {
        rows: [
          { 0: [] },
          { 1: [] }, { 2: [] }],
      };

      hashTable.rows.forEach((row, index) => {
        answers.forEach((answer) => {
          console.log(row[index]);
          if (answer.difficulty === index && answer.ispassed) {
            row[index].push('x');
          } else { row[index].push(''); }
        });
      });

      console.log(hashTable);
    },
  },
};
</script>
<style lang="scss">
table {
  background: rebeccapurple;
  width: 100%;
}
</style>
