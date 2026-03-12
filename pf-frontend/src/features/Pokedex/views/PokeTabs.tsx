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
    background: 'linear-gradient(135deg, rgba(61, 224, 211, 0.28) 0%, rgba(57, 140, 179, 0.5) 100%)',
    boxShadow: 'inset 0 0 0 1px rgba(61, 224, 211, 0.4)',
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
))(({ }) => ({
  textTransform: 'none',
  color: 'rgba(255,255,255,0.7)',
  fontWeight: 600,
  borderRadius: '10px',
  transition: 'color 0.35s ease',
  '&.Mui-selected': {
    color: '#fff',
  },
  '&.Mui-focusVisible': {
    background: 'rgba(100, 95, 228, 0.32)',
  },
  ':focus': {
    outline: 'none'
  }
}));