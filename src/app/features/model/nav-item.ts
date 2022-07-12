export interface NavItem{
  displayName:string,
  dosabled?:boolean,
  iconName:string,
  route?:string,
  children?:NavItem[];
}