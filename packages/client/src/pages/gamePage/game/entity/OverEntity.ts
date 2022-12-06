import background from '@/data/background.json'

export const OverEntity = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  const radius = width < height*0.67 ? width*0.48 : height*0.325;

  context.fillStyle = 'rgba(109, 199, 243, 1)';
  context.fillRect(0, 0, width, height);
  
  for (let i = 0; i < 12; i++) {
    context.fillStyle = `rgba(109, 209, 255, 1)`;
    context.font = `bold ${height*0.14}px PequenaPro`;
    context.fillText((background).toString().slice(i*i), 0, height*0.12*i);
  }

  context.font = `bold ${radius * 0.495}px PequenaPro`;
  context.textAlign = 'center'

  context.lineWidth = radius * 0.035;
  context.strokeStyle = `rgba(255, 229, 255, 255)`;
  context.strokeText('WINNER!', width*0.5, height*0.425);
  context.fillStyle = `rgba(20, 29, 13, 1)`;
  context.fillText('WINNER!', width*0.5, height*0.425);
}