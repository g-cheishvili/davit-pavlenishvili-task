// export class BranchModel {
//   id: number;
//   address: string;
//   manager_name: string;
// }
export interface Branch {
  id: number;
  address: string;
  manager_name: string;
}

export type Branches = Branch[];
