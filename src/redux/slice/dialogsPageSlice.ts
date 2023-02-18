import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/types';
import { RootState } from '../store';

interface DialogsPageState {
  users: IUser[];
}
const initialState: DialogsPageState = {
  users: [
    {
      id: '1',
      name: 'Александр',
      fullName: 'Ерофеев',
      avatar:
        'https://sun9-10.userapi.com/impf/c846416/v846416686/1eed75/SQVs3BBLeRY.jpg?size=331x303&quality=96&sign=c6fd25aff46b7704cc6292de58512a2a&type=album',
    },
    {
      id: '2',
      name: 'Захар',
      fullName: 'Никитин',
      avatar:
        'https://sun9-17.userapi.com/impg/hXmhaNL1OlVwsysSRdrNVCh-aPLr4Dju9ZO3uw/80ubqBuk1uY.jpg?size=1620x2160&quality=95&sign=b595a2e6395fb4382f4e3c8b3233b02f&type=album',
    },
    {
      id: '3',
      name: 'Антон',
      fullName: 'Спирин',
      avatar:
        'https://sun4-10.userapi.com/impg/1Jl8wXsSD3Y1DFzFLjABL7H7r7ylbMG-z-7fpw/-MMw7sCVmws.jpg?size=879x969&quality=95&sign=7a9f6a3880b005d150dab42c9de5a666&type=album',
    },
    {
      id: '4',
      name: 'Ольга',
      fullName: 'Туник',
      avatar:
        'https://sun9-71.userapi.com/impg/0BBXY1F7kPArSC7FHClfq1ZzEzONVMtV2mEpGg/KYsEDPj4b_4.jpg?size=591x1280&quality=95&sign=c27d588a307918154581d4675b344f37&type=album',
    },
  ],
};

const dialogsPageSlice = createSlice({
  name: 'dialogsPage',
  initialState,
  reducers: {},
});

export const selectUsers = (state: RootState) => state.dialogs.users;
export const selectDialog = (id: string) => (state: RootState) =>
  state.dialogs.users.find((dialog) => dialog.id === id);

export default dialogsPageSlice.reducer;
