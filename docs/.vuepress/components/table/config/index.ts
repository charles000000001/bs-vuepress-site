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
