export interface IActiveContext {
  isActive: boolean;
  SetIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export interface IActiveInputBtnContext {
  isActive: boolean;
  SetIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
