import {TableColumnType} from "ant-design-vue";

export interface ISelectOption{
    label:string;
    value:any;
}
type typeEnum = 'InputNumber'|'SvgIcon'
export interface ITableColumnsType extends TableColumnType{
    key?:string;
    isEdit?:boolean;//是否开启自动编辑列
    noDesign?:boolean;//是否显示设计
    noDel?:boolean;//是否显示删除
    noShow?:boolean;//是否显示预览
    isTimeUTC?:boolean;//是否为UTC时间
    type?:typeEnum;// 类型
    noEdit?:boolean;//是否显示编辑
    isHistoryVersion?:boolean;//是否显示历史版本
    dataSource?:Array<ISelectOption>;
    switchSource?:Array<ISelectOption>;//禁用启用
    file?:any;//文件上传
    noRequired?:boolean;//是否必填
    copy?:boolean;//是否可以复制
}

export interface IModal{
    add?:boolean;
    edit?:boolean;
    show?:boolean;
}
export type modalMode='add'|'show'|'edit';

// 判断2个对象是否相等
export function isEqualObject(obj1:any,obj2:any){
    if(obj1===obj2){
        return true;
    }
    if(typeof obj1!=="object"||obj1===null||typeof obj2!=="object"||obj2===null){
        return false;
    }
    let keys1=Object.keys(obj1);
    let keys2=Object.keys(obj2);
    if(keys1.length!==keys2.length){
        return false;
    }
    for(let key in obj1){
        if(!obj2.hasOwnProperty(key)){
            return false;
        }
        if(!isEqualObject(obj1[key],obj2[key])){
            return false;
        }
    }
    return true;
}
