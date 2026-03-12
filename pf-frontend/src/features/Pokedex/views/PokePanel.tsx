import { Box } from "@mui/material";

interface PokePanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function PokePanel(props: PokePanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{ flex: 1, minHeight: 0, overflow: 'auto' }}
      {...other}>
      {
        value === index && 
        <Box sx={{ justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap', display: 'flex', flexDirection: 'row', minHeight: '100%', background: 'radial-gradient(circle,rgba(0, 232, 213, 1) 0%, rgba(0, 50, 94, 1) 100%)' }}>
          {children}
        </Box>
      }
    </div>
  );
}