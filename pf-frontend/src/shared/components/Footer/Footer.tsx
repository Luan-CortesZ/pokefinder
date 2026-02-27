import './styles/Footer.scss'
export default function Footer() {
    return (
     <footer className="general-footer">
        <div className="button">
					<span className="front">
					</span>
        </div>
        <div className="green-screen">

        </div>
        <div className="dpad-container">
					<div className="pushable up">
							<span className="front">▲</span>
					</div>
					
					<div className="pushable left">
							<span className="front">◀</span>
					</div>

					<div className="pushable right">
							<span className="front">▶</span>
					</div>

					<div className="pushable down">
							<span className="front">▼</span>
					</div>
					
					<div className="dpad-center">
						<span className="front"></span>
					</div>
				</div>
     </footer>
    );
}
