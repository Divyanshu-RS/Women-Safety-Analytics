# Women Safety Analytics

## Background
The increasing concern for women's safety and the rise in crimes against women in various cities highlight the need for advanced surveillance and analytical solutions. Women Safety Analytics provides real-time threat detection software to address these issues and enhance safety for women in public spaces.

## Detailed Description
Women Safety Analytics leverages advanced real-time monitoring and analytics to create safer environments for women. It helps law enforcement by detecting anomalies and generating alerts to preempt potential incidents, thereby ensuring public safety.

Key functionalities include continuous monitoring of the scene to count the number of men and women present, providing insights into gender distribution at specific times and locations. The system identifies unusual patterns, such as a lone woman at night or gestures signaling distress, generating alerts to mitigate risks.

The software uses OpenCV for image processing, enabling detection of faces and gestures in real-time. A deep neural network (DNN) is employed for robust detection and classification tasks, ensuring the accuracy of the results.

## Tech Stack
- Programming Language: Python
- Libraries:
    <p> - OpenCV: For real-time image processing and computer vision tasks.</p>
    <p> - NumPy: For numerical operations and array manipulations.</p>
- Deep Learning Framework:
    <p> - OpenCV DNN Module: Used for face and hand detection by loading pre-trained models.</p>
- Tools:
    <p> - argparse: For command-line argument parsing to enable flexible execution of the software.</p>
    <p> - Pre-trained Models: The system uses pre-trained models for face detection to reduce development time and increase accuracy.</p>

## Key Functionalities
1. Person Detection with Gender Classification: Detect and classify the gender of individuals in the scene using pre-trained DNN models.
2. Gender Distribution: Count the number of men and women present in the scene in real-time.
3. Identifying a Lone Woman at Night: Detect scenarios where a lone woman is present during nighttime.
4. Detection of a Woman Surrounded by Men: Identify situations where a woman is surrounded by men.
5. Recognizing SOS Situations through Gesture Analytics: Analyze gestures to detect SOS signals.
6. Identifying Hotspots: Detect areas more prone to incidents based on past alerts and activity patterns.

## Code Overview
The code utilizes OpenCV's DNN module for face and hand detection. Key functions include:

- highlightFace: Detects faces in the frame and highlights them using a bounding box.
detectHands: Simplified gesture detection mechanism for analyzing potential SOS signals.
Advantages of the System
- Real-time Monitoring: The system provides instant detection and classification of gender and gestures.
- Proactive Intervention: Early detection allows law enforcement to intervene before situations escalate.
Insightful Analytics: Continuous analysis offers valuable data to identify hotspots and trends, supporting strategic planning for city safety.
