import styled from "@emotion/styled";
import { Tabs, type TabsProps } from "@mui/material";
import Tab from "@mui/material/Tab";

type PokeTabsProps = TabsProps;

export const PokeTabs = styled((props: PokeTabsProps) => (
  <Tabs
    {...props}
  />
))({
  '& .MuiTabs-indicator': {
    height: '100%',
    top: 0,
    borderRadius: '10px',
    background: 'rgb(57, 165, 215)',
    zIndex: 0,
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  '& .MuiTab-root': {
    zIndex: 1,
  },
});

interface PokeTabProps {
  label: string;
}

export const PokeTab = styled((props: PokeTabProps) => (
  <Tab disableRipple {...props} />
))(() => ({
  textTransform: 'none',
  color: 'rgba(255,255,255,0.7)',
  borderRadius: '10px',
  transition: 'color 0.35s ease',
  '&.Mui-selected': {
    color: '#fff',
    fontWeight: 600,
  },
  '&.Mui-focusVisible': {
    background: 'rgba(100, 95, 228, 0.32)',
  },
  ':focus': {
    outline: 'none'
  }
}));