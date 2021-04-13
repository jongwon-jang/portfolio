import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Experience = () => {
	return (
		<div>
			<Container>
				<h3 className="text-center">Experience</h3>
				<Card className="card-border">
					<Card.Body>
						<Card.Title>
							{'Jan 2020 - Apr 2020'}
							<h2>
								Business Systems Analyst – Enterprise Protect (TRMIS)
							</h2>{' '}
						</Card.Title>
						<Card.Text>
							<h6>
								• Identified issues, analyzed information and provided solutions
								for various problems.<br></br>• Wrote and maintained bash
								scripts to automate repetitive tasks and improved system
								efficiency.<br></br> • Managed group/id access for Red Hat
								Enterprise Linux(RHEL) Servers.<br></br>
							</h6>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className="card-border">
					<Card.Body>
						<Card.Title>
							{'Oct 2015 - Jul 2017'}
							<h2>Sergeant</h2>{' '}
						</Card.Title>
						<Card.Text>
							<h6>
								• Leaded a squad as a squad leader from January 2017 to July
								2017.<br></br>• Maintained energy and enthusiasm in a fast-paced
								environment.<br></br>
							</h6>
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default Experience;
