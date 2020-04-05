export interface IItem {
  _id: string;
  payment: string;
  isDrug: boolean;
  isPsycho: boolean;
  form: string;
  name: string;
  dose: string;
  amount: string;
  prescription: string;
  authorId: string;
  authorName: string;
  collectionId: string;
  comments: [string];
}
