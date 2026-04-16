// types/navigation.ts
export type RootStackParamList = {
  Login: undefined;
  Dashboard: { 
    userName: string; 
    voluntarioId: string 
  };
  Projetos: undefined;
};
