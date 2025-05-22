export class DivMover {
    constructor(private movingElement: HTMLElement, private targetElement: HTMLElement) {}
  
    moveToTarget() {
      const targetRect = this.targetElement.getBoundingClientRect();
      const movingRect = this.movingElement.getBoundingClientRect();
  
      const deltaX = targetRect.left - movingRect.left;
      const deltaY = targetRect.top - movingRect.top;
  
      // Make the moving div positioned absolutely
      this.movingElement.style.position = 'absolute';
      this.movingElement.style.transition = 'all 0.5s ease';
  
      // Move it by setting left/top
      this.movingElement.style.left = (movingRect.left + deltaX) + 'px';
      this.movingElement.style.top = (movingRect.top + deltaY) + 'px';
    }
  }
  