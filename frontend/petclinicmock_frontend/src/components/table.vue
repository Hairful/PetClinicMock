<template>
    <Table :data="tableData" style="width:100%">
      <template v-for="column in columns">
        <TableColumn :key="column.prop" :prop="column.prop" :label="column.title" v-if="!column.action"/>
        <TableColumn :label="column.title" v-else>
          <template slot-scope="scope">
            <template v-for="(fn,index) in column.actions">
              <Divider direction="vertical" v-if="index>0"/>
              <Button type="text" @click="handleClick(scope.row,fn.fnName)">{{fn.title}}</Button>
            </template>
          </template>
        </TableColumn>
      </template>
    </Table>
</template>
  <script>
    import {Table, TableColumn,Divider,Button} from 'element-ui'
  
    export default {
      name: "tableC",
      components: {Table, TableColumn,Divider,Button},
      props: {
        columns: {
          required: true, type: Array, default: () => {
            return []
          }
        },
        tableData: {
          required: true,
          type: Array,
          default: () => {
            return []
          }
        }
      },
      methods:{
        handleClick(row,fnName){
          this.$emit(`${fnName}`,row)
        }
      }
    };
  </script>
  
  